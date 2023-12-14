<script>
    import Headbar from "../components/headbar/+headbar.svelte";
    import Button from "../components/button/+button.svelte";
    import Footer from "../components/footer/+footer.svelte";
    import Card from "../components/card/+card.svelte";
    import Carousel from "../components/carousel/+carousel.svelte";
</script>

<div class="bg-cover bg-center p-5 relative" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('/assets/home-page-img.webp'); height: 100vh;">
    <Headbar />
    <div class="w-1/2 flex-col absolute top-1/2 space-y-5 px-5">
        <h1>Dạy Nghề Sáng Tạo</h1>
        <p>Với đội ngũ chuyên gia Tài chính Kế toán giàu kinh nghiệm có đầy đủ cơ sở vật chất sẽ là nơi thích hợp để các bạn theo học và thực hiện mơ ước của mình. Kết thúc khóa học các bạn sẽ là người tự tin, bản lĩnh bước vào nghề với niềm tin tất thắng.</p>
        <Button buttonText="Đăng ký" onClick={()=>console.log("Clicked")} />
    </div>
</div>

<div class="p-5">
    <h2 class="text-deepBlue">Khóa học dạy nghề</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4"><Card cardTitle="Kế toán" cardImage="assets/rectangle-3.png"/></div>
        <div class="p-4"><Card cardTitle="Tài chính" cardImage="assets/rectangle-4.png"/></div>
    </div>
</div>

<div class="p-5">
    <h2 class="text-deepBlue">Ảnh học viên</h2>
    <Carousel />
</div>

<Footer />
