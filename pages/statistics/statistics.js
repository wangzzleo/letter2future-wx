import * as echarts from '../../components/ec-canvas/echarts';
import * as china from '../../components/ec-canvas/china';

let chart = null;
// 2、进行初始化数据
function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '全国来信统计',
      subtext: '',
      x: 'center'
    },
    tooltip: {
      show: false, //不显示提示标签
      formatter: '{b}', //提示标签格式
      backgroundColor: "#ff7f50",//提示标签背景颜色
      textStyle: { color: "#fff" }, //提示标签字体颜色
    },
    series: [{
      type: 'map',
      mapType: 'china',
      tooltip: {
        trigger: 'item'
      },
      label: {
        normal: {
          show: true,//显示省份标签
          textStyle: { color: "#000", fontSize: '10', fontFamily: ' Arial, serif, monospace, Courier New, Microsoft YaHei' },//省份标签字体颜色
        },
        emphasis: {//对应的鼠标悬浮效果
          show: true,
          textStyle: { color: "#800080" }
        }
      },
      itemStyle: {
        normal: {
          borderWidth: .5,//区域边框宽度
          borderColor: '#009fe8',//区域边框颜色
          areaColor: "#fff",//区域颜色
        },
        emphasis: {
          borderWidth: .5,
          borderColor: '#4b0082',
          areaColor: "#DCFBFE",
        }
      },
      markPoint: {
        symbol: 'circle',
      },
      data: [
        {
          name: '四川', value: '12', selected: true,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return params.name + "\n" + params.value;
              },

            }
          },
        }, //为选中状态
        {
          name: '山西', value: '8', selected: true,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return params.name + "\n" + params.value;
              },

            }
          },
        }, //为选中状态
        // { name: '海南', value: '12', selected: true }, //为选中状态
      ]
    }]
  };

  chart.setOption(option);
  return chart;
}
Page({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
  data: {
    ec: {
      onInit: initChart // 3、将数据放入到里面
    },
  },
  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      console.log(chart)
    }, 2000);
  }
});