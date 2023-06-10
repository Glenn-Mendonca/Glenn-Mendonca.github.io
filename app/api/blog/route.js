import path from "path";
import { promises as fs } from "fs";
import { NextResponse } from "next/server";

export async function GET(req) {
  const directory = path.join(process.cwd(), "data");
  const file = path.join(directory, "blog.json");
  const data = JSON.parse(await fs.readFile(file, "utf8"));
  return NextResponse.json(data);
}
