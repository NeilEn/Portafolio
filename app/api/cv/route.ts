import { NextRequest, NextResponse } from 'next/server'
import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'cv-neil-endicott.pdf')
    const fileBuffer = readFileSync(filePath)
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Neil-Endicott-CV.pdf"',
      },
    })
  } catch (error) {
    console.error('Error serving CV:', error)
    return NextResponse.json({ error: 'CV not found' }, { status: 404 })
  }
} 