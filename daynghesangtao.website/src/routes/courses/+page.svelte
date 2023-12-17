<script>
    import Card from "../../components/card/+card.svelte";
</script>

<div class="p-5">
    <h2 class="text-deepBlue">Khóa học dạy nghề</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="p-4"><Card cardLink={"/courses/ke-toan"} cardTitle="Kế toán" cardImage="assets/rectangle-3.png"/></div>
        <div class="p-4"><Card cardLink={"/courses/tai-chinh"} cardTitle="Đầu tư tài chính" cardImage="assets/rectangle-4.png"/></div>
    </div>
</div>