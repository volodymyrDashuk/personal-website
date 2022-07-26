<template>
    <div class="not-found-wrap">
        <h1 class="not-found">Error 404</h1>
    </div>
</template>

<style lang="scss">
@use "src/styles/variables" as var;

//  Common

.not-found-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.not-found {
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: type .5s alternate infinite;

    @keyframes type{
        from{box-shadow: inset -3px 0px 0px #888;}
        to{box-shadow: inset -3px 0px 0px transparent;}
    }
}

</style>
