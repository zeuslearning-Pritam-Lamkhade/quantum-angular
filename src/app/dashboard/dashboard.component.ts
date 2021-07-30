import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'cf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  CoursesData=[{
    courseImage: "/assets/quantum-screen-assets/images/imageMask-1.svg",
    courseTitle: "Acceleration",
    favourite: "/assets/quantum-screen-assets/icons/favourite.svg",
    subject: "Physics",
    grade: "Grade 7",
    gradePlus: "+2",
    units: 4,
    lessons: 18,
    topics: 24,
    optionsClass: "Mr. Frank's Class B",
    totalStudents: 50,
    timeline: "21-Jan-2020 - 21-Aug-2020",
    preview: "/assets/quantum-screen-assets/icons/preview.svg",
    manageCourse: "/assets/quantum-screen-assets/icons/manage course.svg",
    gradeSubmission: "/assets/quantum-screen-assets/icons/grade submissions.svg",
    reports: "/assets/quantum-screen-assets/icons/reports.svg",
    expired: false,
    manageCourseDisabled: false,
    gradeSubmissionDisabled: false,

  },{
    courseImage: "/assets/quantum-screen-assets/images/imageMask-2.svg",
    courseTitle: "Displacement, Velocity and Speed",
    favourite: "/assets/quantum-screen-assets/icons/favourite.svg",
    subject: "Physics 2",
    grade: "Grade 6",
    gradePlus: "+3",
    units: 2,
    lessons: 15,
    topics: 20,
    optionsClass: "No Classes",
    timeline: "",
    preview: "/assets/quantum-screen-assets/icons/preview.svg",
    manageCourse: "/assets/quantum-screen-assets/icons/manage course.svg",
    gradeSubmission: "/assets/quantum-screen-assets/icons/grade submissions.svg",
    reports: "/assets/quantum-screen-assets/icons/reports.svg",
    expired: false,
    manageCourseDisabled: true,
    gradeSubmissionDisabled: true,

  },{
    courseImage: "/assets/quantum-screen-assets/images/imageMask.svg",
    courseTitle:
      "Introduction to Biology: Micro...",
    favourite: "/assets/quantum-screen-assets/icons/favourite.svg",
    subject: "Biology",
    grade: "Grade 4",
    gradePlus: "+1",
    units: 5,
    lessons: 16,
    topics: 22,
    optionsClass: "All Classes",
    totalStudents: 300,
    timeline: "",
    preview: "/assets/quantum-screen-assets/icons/preview.svg",
    manageCourse: "/assets/quantum-screen-assets/icons/manage course.svg",
    gradeSubmission: "/assets/quantum-screen-assets/icons/grade submissions.svg",
    reports: "/assets/quantum-screen-assets/icons/reports.svg",
    expired: false,
    manageCourseDisabled: true,
    gradeSubmissionDisabled: true,

  },{
    courseImage: "/assets/quantum-screen-assets/images/imageMask-3.svg",
    courseTitle: "Introduction to High ",
    favourite: "/assets/quantum-screen-assets/icons/favourite-greyed.svg",
    
    subject: "Mathematics",
    grade: "Grade 8",
    gradePlus: "+3",
    units: 0,
    lessons: 0,
    topics: 0,
    optionsClass: "Mr. Frank's Class A",
    totalStudents: 44,
    timeline: "14-Oct-2019 - 20-Oct-2020",
    preview: "/assets/quantum-screen-assets/icons/preview.svg",
    manageCourse: "/assets/quantum-screen-assets/icons/manage course.svg",
    gradeSubmission: "/assets/quantum-screen-assets/icons/grade submissions.svg",
    reports: "/assets/quantum-screen-assets/icons/reports.svg",
    expired: true,
    manageCourseDisabled: false,
    gradeSubmissionDisabled: false,
  }];
}
      