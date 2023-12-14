<script>
    import Headbar from "../../components/headbar/+headbar.svelte";
    import Footer from "../../components/footer/+footer.svelte";
</script>

<div class="bg-cover bg-center p-5 relative flex flex-col items-center" style="background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('/assets/about-us-img.webp'); height: 100vh;">
    <Headbar />
    <div class="w-1/2 flex-col absolute top-1/2 space-y-5">
        <h1 class="font-bt-beausans">Chúng tôi là ai?</h1>
        <p class="font-bt-beausans">Trung tâm dạy nghề Sáng Tạo được thành lập ngày 7 tháng 11 năm 2015 bởi một nhóm các chuyên gia Tài chính Kế toán giàu kinh nghiệm.</p>
    </div>
</div>

<Footer />