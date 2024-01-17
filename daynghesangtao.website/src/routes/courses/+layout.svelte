<script>
    import Headbar from "../../components/headbar/+headbar.svelte";
</script>

<div class="bg-cover bg-center p-5 relative flex flex-col items-center" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)), url('/assets/IMG_0690.webp'); height: 100vh; background-">
    <Headbar />
    <div class="w-1/2 flex-col absolute top-1/2 space-y-5 flex flex-col items-center">
        <h1 class="font-bt-beausans">Khóa học</h1>
        <p class="font-bt-beausans text-xl">Chỉ đường dẫn lối vào nghề Kế toán-Kiểm toán</p>
        <p class="font-bt-beausans text-xl">"Bạn dành cho tôi 2 tuần, tôi trao cho bạn 20 năm kinh nghiệm"</p>
    </div>
</div>

<slot></slot>