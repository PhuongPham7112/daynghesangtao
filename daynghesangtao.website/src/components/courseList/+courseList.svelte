<script>
    import Card from "../../components/card/+card.svelte";
</script>

<div class="p-5">
    <h2 class="text-deepBlue">Khóa học dạy nghề</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="p-4"><Card cardDescription="Lập bản đồ chỉ đường em đi" cardLink={"/courses/1"} cardTitle="Khóa học 1" cardImage="assets/rectangle-3.png"/></div>
        <div class="p-4"><Card cardDescription="Chuyên gia dẫn lối vào nghề kế toán-kiểm toán" cardLink={"/courses/2"} cardTitle="Khóa học 2" cardImage="assets/rectangle-3.png"/></div>
    </div>
</div>