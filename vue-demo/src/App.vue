<template>
  <div id="app">
    <form class="layui-form" action>
      <div class="layui-form-item">
        <label class="layui-form-label">输入框</label>
        <div class="layui-input-block">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
