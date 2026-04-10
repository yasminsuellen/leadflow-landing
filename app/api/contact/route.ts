import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { NextRequest, NextResponse } from 'next/server'

const adapter = new PrismaPg(process.env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

export async function POST(request: NextRequest) {
  console.log('DATABASE_URL prefix:', process.env.DATABASE_URL?.substring(0, 20))
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const contact = await prisma.contact.create({
      data: { name, email, message },
    })

    return NextResponse.json(contact, { status: 201 })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Contact API error:', message)
    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}