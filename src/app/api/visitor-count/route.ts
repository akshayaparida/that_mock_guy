import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Fallback for local development if KV env vars are missing
const LOCAL_DB_PATH = path.join(process.cwd(), 'local-visitor-count.txt');

async function getLocalCount() {
  try {
    if (fs.existsSync(LOCAL_DB_PATH)) {
      const data = fs.readFileSync(LOCAL_DB_PATH, 'utf-8');
      return parseInt(data) || 0;
    }
  } catch (e) {
    console.error("Local DB read error", e);
  }
  return 0;
}

async function incrementLocalCount() {
  const current = await getLocalCount();
  const newCount = current + 1;
  try {
    fs.writeFileSync(LOCAL_DB_PATH, newCount.toString());
  } catch (e) {
    console.error("Local DB write error", e);
  }
  return newCount;
}

export async function GET() {
  try {
    let count;
    // Check if running on Vercel with KV configured
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        count = await kv.get('visitor_count');
        if (!count) count = 0;
    } else {
        // Local fallback
        count = await getLocalCount();
    }
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Visitor count error:', error);
    return NextResponse.json({ count: 0 }); // Fail gracefully
  }
}

export async function POST() {
  try {
    let count;
    if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        count = await kv.incr('visitor_count');
    } else {
        count = await incrementLocalCount();
    }
    return NextResponse.json({ count });
  } catch (error) {
    console.error('Visitor count increment error:', error);
    return NextResponse.json({ count: 0 });
  }
}
