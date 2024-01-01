<script>
    function redirectToHomePage() {
      window.location.href = '/';
    }
  </script>

<div class="w-full">
    <div class="flex justify-between items-center">
        <button class="bg-transparent" on:click={redirectToHomePage}>
            <img src="/assets/logo.png" alt="logo" class="w-10 h-10"/>
        </button>
        <div class="header-right">
            <ul class="flex justify-around items-center space-x-10">
                <li><a href="/"><p>Trang chủ</p></a></li>
                <li><a href="/about"><p>Giới thiệu</p></a></li>
                <li><a href="/courses"><p>Khóa học</p></a></li>
                <li><a href="/blog"><p>Kinh Nghiệm</p></a></li>
                <li><a href="https://forms.gle/wD8TfsjesNqdebvf7"><p>Liên hệ</p></a></li>
            </ul>
        </div>
    </div>
</div>