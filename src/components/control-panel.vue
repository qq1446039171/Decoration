<template>
  <div class="control attribute">
    <h3 class="control-content__title">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: {
      type: String,
      default: '搜索框设置'
    }
  }
}
</script>

<style lang="scss" scoped>
.control {
  padding: 4px 32px;

  h4 {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 0.85);
  }

  .empty {
    height: 20px;
  }

  ::deep .control-item-h3 {
    font-weight: 400;
    color: #262626;
    font-size: 14px;
  }

  ::deep .el-tabs__content {
    overflow: visible;
  }

  ::deep .el-form-item__label {
    font-size: 14px;
    font-weight: 400;
    color: #8c8c8c;
    opacity: 0.65;
  }

  ::deep .el-radio {
    line-height: 2;
  }

  ::deep .control-item-button {
    width: 336px;
    height: 32px;
    background: #ffffff;
    border: 1px solid #623ceb;
    border-radius: 4px;
  }

  /**
     * 多选框处理
     */
  ::deep .fitment-radio {
    .el-radio-button__inner {
      display: inline-block;
      width: auto;
      height: auto;
      background: #ffffff;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      margin-bottom: 8px;
      padding: 6px 12px;
      margin-right: 8px;
      color: #bbbfc8;
      position: relative;
    }

    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
      background: #ffffff;
      color: #623ceb;
      box-shadow: none;
      border: 1px solid #623ceb;
    }

    .fitment-radio-item {
      width: 248px;
      height: 60px;
    }
  }

  ::deep .el-divider--horizontal {
    margin: 12px 0;
  }

  ::deep .control-content__tabs {
    .el-tabs__header {
      padding: 0;
    }

    div.el-tabs__nav {
      margin-left: 68px;
    }

    .el-tabs__item {
      padding: 0 40px;
    }
  }

  ::deep .control-item-tips {
    width: 336px;
    background: #f3f5f7;
    border-radius: 4px;
    margin-top: 15px;
    padding: 15px;
    box-sizing: border-box;

    > span {
      padding-left: 8px;
      font-size: 12px;
      font-weight: 400;
      color: #bfbfbf;
    }
  }

  ::deep .control-item-title {
    line-height: 35px;
    margin-bottom: 5px;
    font-weight: 400;
    color: #333333;
    opacity: 0.85;
    font-size: 14px;
  }

  .control-content__title {
    position: relative;
    font-weight: 400;
    font-size: 20px;
    padding-left: 16px;
    margin: 10px 0;

    &:before {
      position: absolute;
      content: '';
      left: 0;
      top: 5px;
      border-left: 4px solid #623ceb;
      height: 20px;
    }
  }
}
</style>
