<script>
    import Course from "../../../components/course/+course.svelte";
    let myCourseDetails = new Map([
    ['Đối tượng', 'Dành cho các bạn sinh viên...'],
    ['Nội dung đào tạo', 'Chuyên môn: ...'],
    ['Trang bị dụng cụ học tập', 'Mỗi học viên một máy vi tính...'],
    ['Thời gian', '14 buổi, 3 giờ một tuần'],
    ['Học phí', 'Liên hệ để biết thêm chi tiết'],
  ]);
</script>

<Course courseTitle="Đầu tư tài chính" courseDetails={myCourseDetails} />