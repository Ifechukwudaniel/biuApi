module.exports = {
   CreateDepartment:"/department/create",
   CreateLevel:"/level/create",
   CreateCourse:"/course/create",
   CreateUser:"/auth/register",
   CreateMaterial:"/material/create",
   CreateComment:"/comment/",
   CreateTimeTableByLevel:"/timetable/",
   FetchUserAllUser:"/users",
   FetchUserById:"/auth/:userId",
   FetchAllDepartment:"/department/",
   FetchLevelByDepartmentId :"/:departmentId/level/",
   FetchLevel :"/levels/",
   FetchCourseByLevel:"/:level/course/",
   FetchMaterialsByCourseId:"/material/:courseId",
   FetchMaterials:"/material",
   FetchMaterialsByDepartmentAndLevel:"/material/:department/:level",
   FetchAllBlogs:'/blog/',
   FetchCommentByBlogId:'/comment/:blogId',
   FetchTimeTableByLevel:"/timetable/:level",
   DeleteDepartment:"/department/",
   DeleteById:"/auth/:userId",
   DeleteBlog:"/blog/:blogId",
   deleteCommentById:'/comment/:blogId',
   Login :"/auth/login",
   VerifyToken:'/auth/token',
   FetchAllCourse:'/courses/',
   CreateBlog:'/blog/',
   CreateAttendance:'/attendance/',
   FetchAttendance:'/attendance/',
   FetchAttendanceByCourse:'/attendance/:course',
   searchMaterials:"/search/material/:searchQuery",
   filterMaterial:"/filter/material/:query"
   
}