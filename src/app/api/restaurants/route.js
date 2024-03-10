import { connectionStr } from "@/app/lib/db";
import { Restaurant } from "@/app/lib/restaurants.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await Restaurant.find();
  console.log(data);
  return NextResponse.json({
    result: true,
  });
}

export async function POST(NextRequest) {}
