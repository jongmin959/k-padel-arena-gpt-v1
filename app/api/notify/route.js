import { NextResponse } from "next/server";
export async function POST(request){const body=await request.json();return NextResponse.json({ok:true,delivered:false,channel:body.channel||"webpush",message:"Web Push 서버 연동 지점입니다. VAPID 키 설정 후 실발송을 연결할 수 있습니다."})}
