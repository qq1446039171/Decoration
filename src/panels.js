const panels = {
  basics: {
    title: '基础类',
    children: [
      {
        title: '搜索框',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/search-icon.png',
        type: 'searchInput',
        data: {
          backgroundColor: '#f5f5f5', // 搜索区域背景颜色
          inputBackgroundColor: '#ffffff', // 搜索框背景颜色
          wordColor: '#999999', // 搜索文字颜色
          iconColor: '#b4b4b4', // 搜索图标颜色
          tipsWord: '请输入关键字进行搜索',
          inputStyleRadio: 'square', // 搜索框类型  方形：square  圆角：circle  圆弧：arc
          wordAlignRadio: 'left', // 文字对齐方式
          topBottomPx: 5, // 上下编剧
          leftRightPx: 5 // 左右边距
        }
      },
      {
        title: '公告',
        type: 'notice',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/notice-icon.png',
        data: {
          title: '',
          icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/notice-img.png',
          titleColor: '#f58e20',
          speed: 80,
          backgroundColor: '#fff5e1'
        }
      },
      {
        type: 'title',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/title-icon.png',
        title: '标题栏',
        content: {
          style: 1,
          title: '主标题',
          subtitle: '子标题',
          is_more: true,
          moretitle: '查看更多',
          morelink: {}
        },
        //外观
        facade: {
          title_color: '#333333',
          title_font_size: 14,
          subtitle_color: '#999999',
          subtitle_font_size: 12,
          more_color: '#999999',
          margin: 20,
          backgroundColor: '#F5F5F5'
        }
      },
      {
        type: 'banner',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/banner-icon.png',
        title: '轮播图',
        content: [],
        //外观
        facade: {
          chamfer_style: 1, //倒角样式
          indicator_style: 1, //指示器样式
          indicator_align: 'left', //指示器位置
          indicator_color: '#f5212d' //指示器颜色
        }
      },
      {
        type: 'navigation',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/navigation-icon.png',
        title: '图文导航',
        content: {
          style: 1, //风格
          data: [
            {
              url: '',
              title: '导航一',
              link: {}
            },
            {
              url: '',
              title: '导航二',
              link: {}
            },
            {
              url: '',
              title: '导航三',
              link: {}
            },
            {
              url: '',
              title: '导航四',
              link: {}
            }
          ]
        },
        //外观
        facade: {
          nav_style: 1, //展示样式 1 单行 2多行
          nav_line: 2,
          nav_line_mun: 4,
          active_color: '#f5212d',
          indicator_style: 1, //指示器样式
          backgroundColor: '#FFFFFF',
          text_color: '#333333'
        }
      },
      {
        type: 'rubik',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/rubik-icon.png',
        title: '图片魔方',
        content: {
          style: 1, //风格 1  2  3  4  5  6
          density: 4, //魔方密度
          data: [
            {
              url: '',
              link: ''
            }
          ]
        },
        //外观
        facade: {}
      },
      {
        type: 'video',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/video-icon.png',
        title: '视频',
        content: {
          video: {},
          cover: '',
          autoplay: false,
          loop: true,
          source: 0,
          address: ''
        },
        //外观
        facade: {}
      },
      {
        type: 'tabs',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/tabs-icon.png',
        title: '选项卡',
        content: {
          data: [
            {
              title: '名称',
              type: 1,
              goods: [],
              group: {}
            }
          ],
          is_title: true,
          is_price: true,
          is_button: true
        },
        //外观
        facade: {
          list_style: 2, //列表样式
          card_style: 1, //卡片样式
          chamfer_style: 0, //倒角样式
          margin: 10, //商品间距
          padding: 10, //左右边距
          backgroundColor: '#F5F5F5'
        }
      }
    ]
  },
  advanced: {
    title: '商品类',
    children: [
      {
        type: 'goods',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/goods-icon.png',
        title: '商品',
        content: {
          type: 1, //商品类型
          goods: [],
          group: {
            id: 0,
            type: '',
            limit: 20
          },
          is_title: true,
          is_price: true,
          is_button: true
        },
        facade: {
          list_style: 3, //列表样式
          card_style: 1, //卡片样式
          chamfer_style: 0, //倒角样式
          margin: 30, //商品间距
          padding: 20 //左右边距
        },
        backgroundColor: '#F5F5F5'
      }
    ]
  },
  marketing: {
    title: '营销类',
    children: [
      {
        type: 'coupon',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/coupon-icon.png',
        title: '优惠券',
        content: {
          style: 1,
          switch: 1,
          autoplay: 0,
          number: '',
          data: []
        },
        //外观
        facade: {
          list_style: 1,
          backgroundColor: '#fff5e1',
          title_color: '#ff830b'
        }
      },
      {
        type: 'task',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/task-icon.png',
        title: '任务中心',
        content: {
          task: {},
          icon: '',
          title: '去攒积分',
          type: 1, //商品类型
          goods: [], //选定商品按钮
          auto: 20, //是否自动获取
          is_title: true,
          is_price: true,
          is_button: true
        },
        facade: {
          title_background: '#ffb525', //标题背景色
          title_color: '#ffffff', //标题文字颜色
          content_background: '#ffffff', //内容背景颜色
          content_color: '#666666', //内容文字颜色
          button_background: '#ffb525', //按钮背景
          button_color: '#ffffff', //按钮颜色
          list_style: 3, //列表样式
          card_style: 1, //卡片样式
          chamfer_style: 0, //倒角样式
          margin: 12, //商品间距
          padding: 12 //左右边距
        }
      },
      {
        type: 'wechatLive',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-live-icon.png',
        title: '微信直播',
        content: {
          number: 1,
          isShowGoods: true,
          more: {
            isShow: true,
            text: '更多直播',
            color: '#999999'
          }
        },
        facade: {
          list_style: 1,
          backgroundColor: '#f5f5f5',
          title_color: '#ff830b',
          cardSpacing: 12,
          leftRightMargins: 12
        }
      }
    ]
  },
  sales: {
    title: '辅助类',
    children: [
      {
        title: '辅助空白',
        type: 'blank',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/blank-icon.png',

        content: {},
        //外观
        data: {
          height: 10,
          backgroundColor: '#FFFFFF'
        }
      },
      {
        type: 'separate',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/separate-icon.png',
        title: '辅助线',
        content: {
          style: 'solid'
        },
        //外观
        facade: {
          margin: 10,
          fill_color: '#bebebe'
        }
      }
    ]
  },
  other: {
    title: '其他',
    children: [
      {
        type: 'wechat',
        icon: 'http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-icon.png',
        title: '微信公众号',
        content: {},
        //外观
        facade: {
          line_style: '',
          line_color: '',
          high_style: 20
        }
      }
    ]
  }
}

export default panels
