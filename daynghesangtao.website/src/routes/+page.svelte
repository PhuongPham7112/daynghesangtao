<script>
    import Headbar from "../components/headbar/+headbar.svelte";
    import Button from "../components/button/+button.svelte";
    import Card from "../components/card/+card.svelte";
    import Carousel from "../components/carousel/+carousel.svelte";
    import CourseList from "../components/courseList/+courseList.svelte";
</script>

<div class="bg-cover bg-center p-5 relative" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url('/assets/home-page-img.webp'); height: 100vh;">
    <Headbar />
    <div class="w-1/2 flex-col absolute top-1/2 space-y-5 px-5">
        <h1>Dạy Nghề Sáng Tạo</h1>
        <p>Trung tâm với đội ngũ chuyên gia đào tạo giàu kinh nghiệm, có trách nhiệm, tâm huyết với nghề sẽ là nơi thích hợp để các bạn theo học và thực hiện mơ ước của mình một cách nhanh nhất.</p>
        <Button buttonText="Đăng ký"/>
    </div>
</div>

<CourseList />

<div class="p-5">
    <h2 class="text-deepBlue">Ảnh học viên</h2>
    <Carousel />
</div>