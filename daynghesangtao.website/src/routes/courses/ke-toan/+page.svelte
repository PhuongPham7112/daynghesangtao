<script>
	import Course from '../../../components/course/+course.svelte';
	let myCourseDetails = new Map([
		[
			'Đối tượng',
			[
				'Các bạn sinh viên muốn học nghề Kế toán.',
				'Các bạn sinh viên Kế toán-Kiểm toán muốn có môi trường thực hành nghiệp vụ và học hỏi kinh nghiệm thực tế từ các Kế toán trưởng, Kiểm toán viên giàu kinh nghiệm để đi làm sớm trước khi có bằng tốt nghiệp.',
        'Các bạn đang làm Kế toán trong doanh nghiệp muốn học hỏi kinh nghiệm và nâng cao nghiệp vụ Kế toán Thuế.'
			]
		],
		[
			'Nội dung đào tạo',
			[
				'1- Hướng dẫn sử dụng phần mềm kế toán',
				'   - Khai báo đối tượng - Cập nhật số liệu - Xem, sửa, xóa số liệu',
				'   - Tổng hợp số liệu lập Báo cáo tài chính, in sổ sách báo cáo',
				'2- Hướng dẫn làm Kế toán DN Sản xuất, Thương mại và Dịch vụ',
				'   - KT tiền - KT mua hàng và phải trả NB - KT bán hàng và phải thu KH',
				'   - KT vật tư hàng hóa - KT tài sản cố định, CCDC, XDCB - KT lương BH',
				'   - KT tiền vay NH - KT giá thành - KT thuế - KT tổng hợp',
				'3- Hướng dẫn làm Kế toán Thuế',
				'   - Thuế giá trị gia tăng - Thuế thu nhập DN - Thuế thu nhập cá nhân',
				'   - Thuế TTĐB - Luật quản lý thuế, Hóa đơn',
				'   - Phần mềm kê khai thuế, nộp tờ khai, nộp thuế điện tử',
				'4- Đồng hành cùng Học viên sau khóa học',
				'   - Tìm việc',
				'   - Thử việc'
			]
		],
		['Thời gian', ['18 buổi, 3 giờ một buổi']],
		['Học phí', ['Liên hệ để biết thêm chi tiết']]
	]);
</script>

<Course courseTitle="Kế toán" courseDetails={myCourseDetails} />
