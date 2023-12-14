<script>
    import Headbar from "../components/headbar/+headbar.svelte";
    import Button from "../components/button/+button.svelte";
</script>

<div class="bg-cover bg-center p-5 relative" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('/assets/home-page-img.png'); height: 100vh;">
    <Headbar />
    <div class="w-1/2 flex-col absolute top-1/2 space-y-5 px-5">
        <h1 class="font-bt-beausans">Dạy Nghề Sáng Tạo</h1>
        <p class="font-bt-beausans">Với đội ngũ chuyên gia Tài chính Kế toán giàu kinh nghiệm có đầy đủ cơ sở vật chất sẽ là nơi thích hợp để các bạn theo học và thực hiện mơ ước của mình. Kết thúc khóa học các bạn sẽ là người tự tin, bản lĩnh bước vào nghề với niềm tin tất thắng.</p>
        <Button buttonText="Đăng ký" onClick={()=>console.log("Clicked")} />
    </div>
</div>