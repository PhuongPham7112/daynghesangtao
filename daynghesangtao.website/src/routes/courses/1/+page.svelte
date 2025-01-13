<script>
	import Course from '../../../components/course/+course.svelte';
	let myCourseDetails = new Map([
		[
			'Đối tượng',
			[
				'- Các bạn sinh viên ngành Kế toán-Kiểm toán muốn học hỏi kinh nghiệm làm việc thực tế từ các Chuyên gia giàu kinh nghiệm.'
			]
		],
		[
			'Nội dung đào tạo',
			[
				'Buổi 1: Tìm hiểu môi trường làm việc',
				'- Làm việc trong môi trường cơ quan nhà nước',
				'- Làm việc trong môi trường doanh nghiệp',
				'Buổi 2: Kinh nghiệm làm nghề',
				'- Kinh nghiệm làm Kế Toán',
				'- Kinh nghiệm làm Dịch Vụ Thuế',
				'- Kinh nghiệm làm Kiểm Toán',
				'Buổi 3: Phương pháp làm việc khoa học',
				'- Phương pháp lập kế hoạch làm việc hiệu quả',
				'- Phương pháp tư duy giải quyết vấn đề',
				'- Nghệ thuật giao tiếp',
				'- Kỹ năng thuyết trình',
				'Buổi 4: Giao tiếp ứng xử trong công việc',
				'- Rèn luyện nhân cách',
				'- Quy tắc ứng xử trong công việc',
				'- Tham quan Doanh Nghiệp sản xuất'
			]
		],
		['Thời gian', ['4 buổi, 3 giờ một buổi']],
		['Học phí', ['Liên hệ để biết thêm chi tiết']]
	]);
</script>

<Course courseTitle="Khoá học 1" courseDetails={myCourseDetails} />
