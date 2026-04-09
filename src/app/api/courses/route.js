import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import { protect } from '@/lib/auth';

export async function GET() {
  try {
    await dbConnect();
    const courses = await Course.find({});
    return NextResponse.json(courses);
  } catch (error) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const user = await protect(request);
    if (!user) {
      return NextResponse.json({ message: 'Not authorized' }, { status: 401 });
    }

    const body = await request.json();
    const { title, icon, description, highlight, school, category } = body;

    const course = new Course({ title, icon, description, highlight, school, category });
    const createdCourse = await course.save();
    return NextResponse.json(createdCourse, { status: 201 });
  } catch (error) {
    console.error('Create course error:', error);
    return NextResponse.json({ message: 'Invalid data' }, { status: 400 });
  }
}
