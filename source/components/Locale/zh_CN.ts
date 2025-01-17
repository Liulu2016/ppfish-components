import { LocaleProperties } from '.';

const localeValues: LocaleProperties = {
  locale: 'zh_CN',
  AudioPlayer: {
    notSupport: '您的浏览器不支持 audio 标签。'
  },
  AutoComplete: {
    notFoundContent: '无匹配结果'
  },
  Cascader: {
    placeholder: '请选择',
    notFoundContent: '无匹配结果'
  },
  Table: {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    filterEmptyText: '无筛选项',
    emptyText: '暂无数据',
    selectAll: '全选当页',
    selectInvert: '反选当页',
    selectionAll: '全选所有',
    sortTitle: '排序',
    expand: '展开行',
    collapse: '关闭行',
    triggerDesc: '点击降序',
    triggerAsc: '点击升序',
    cancelSort: '取消排序',
    modalTitle: '选择需要展示的数据项',
    defaultOptionTitle: '默认展示数据项',
    okText: '确定',
    cancelText: '取消',
  },
  Modal: {
    okText: '确定',
    cancelText: '取消',
  },
  Pagination: {
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',

    // Pagination.js
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页',
  },
  RichEditor: {
    // editor
    insertImageTip: '支持jpg、jpeg、png、gif、bmp格式的图片，最佳显示高度不超过400px，宽度不超过270px。',
    rule1: '1、单个视频不超过10M，支持MP4、3GP格式视频。',
    rule2: '2、最佳显示高度不超过400px',
    PleaseEnterTheVideolinkURL: "请输入视频链接URL",
    selectLocalVideo: '选择本地视频',
    videoLink: '视频链接',
    localVideo: "本地视频",
    insertVideo: '插入视频',
    selectLocalImage: "选择本地图片",
    insertAttachment: "插入附件",
    selectLocalFile: "选择本地文件",
    HyperlinkAddress: '超链接地址',
    insertPicture: '插入图片',
    noVideoLinkErrorTip: '请设置视频源地址',
    VideoCantPlayTip: '视频无法播放',
    file: '[文件]',
    noFileInfoTip: '文件信息读取失败',
    noPicSrcTip: '请设置图片源地址',
    noVideoUrlErrorTip: '视频链接URL不得为空',
    videoUrlFormattingError: '视频链接URL格式错误',
    videoLinkTooLongError: '视频链接不得超过1000个字',
    linkEmptyTip: '链接地址不得为空',
    linkToolongError: '链接地址不得超过1000个字',
    noSelectionText: '没有选中文本',
    insertLink: '插入超链接',
    editLink: '编辑超链接',

    //toolbar
    hyperlinks: '超链接',
    backgroundColor: '背景色',
    textDirection: '文字方向',
    increaseIndent: '增加缩进',
    decreaseIndent: '减少缩进',
    subScript: '下脚标',
    superSciprt: '上脚标',
    codeBlock: '代码块',
    blockquote: '块引用',
    strike: '删除线',
    brushFormat: '格式刷',
    clearFormat: '清除格式',
    fontSize: '文字大小',
    insertEmoji: '插入表情',
    defaultEmoji: '默认表情',
    orderedList: '有序列表',
    unOrderedList: '无序列表',
    alignJustified: '两端对齐',
    alignCenter: '居中',
    alignRight: '居右',
    alignLeft: '居左',
    fontColor: '文字颜色',
    underline: '下划线',
    italic: '斜体',
    bold: '粗体',
    temporarilyNoData: '暂无数据',
    enterKeyWordPlease: '请输入关键字',
    justOkText: '知道了'
  },
  Spin: {
    loading: '加载中'
  },
  Select: {
    errorMessage: '超过选项上限',
    multipleSelectAllText: '所有选项',
    notFoundContent: '无匹配结果',
    placeholder: '请选择',
    searchPlaceholder: '请输入关键字',
    selectAllText: '选择所有',
    confirmText: '确定',
    cancelText: '取消',
    loading: '加载中...'
  },
  Transfer: {
    notFoundContent: '无匹配结果',
    sourceNotFoundContent: '暂无相关信息',
    targetNotFonudContent: '请从左侧选择添加',
    searchPlaceholder: '请输入关键字',
  },
  TreeSelect: {
    placeholder: '请选择',
    searchPlaceholder: '请输入关键字',
    treeNodeResetTitle: '不选择任何分类',
    notFoundContent: '无匹配结果',
    okText: '确定',
    cancelText: '取消',
  },
  Upload: {
    uploading: '上传中',
    removeFile: '移除文件',
    uploadError: '上传错误',
    previewFile: '预览文件',
    cancelText: '取消',
    deleteText: '全部删除',
    uploadedTip: '已上传 ${length} 项'
  },
  List: {
    emptyText: '暂无数据',
  },
  Guide: {
    prevBtnText: '上一步',
    nextBtnText: '下一步',
    doneBtnText: '知道了',
    skipBtnText: '跳过',
  },
  LoadMore: {
    defaultText: '查看更多',
    loadingText: '加载中',
    errorText: '加载失败，请重试',
    endText: '没有更多了',
  },
  DatePicker: {
    now: '现在',
    today: '今天',
    cancel: '取消',
    clear: '清空',
    confirm: '确定',
    startPlaceholder: '开始日期',
    endPlaceholder: '结束日期',
    separator: '至',
    selectDate: '下方选择日期',
    selectTime: '请选择时间',
    startDate: '开始日期',
    startTime: '开始时间',
    endDate: '结束日期',
    endTime: '结束时间',
    year: '年',
    month1: '1 月',
    month2: '2 月',
    month3: '3 月',
    month4: '4 月',
    month5: '5 月',
    month6: '6 月',
    month7: '7 月',
    month8: '8 月',
    month9: '9 月',
    month10: '10 月',
    month11: '11 月',
    month12: '12 月',
    '1月': '1',
    '2月': '2',
    '3月': '3',
    '4月': '4',
    '5月': '5',
    '6月': '6',
    '7月': '7',
    '8月': '8',
    '9月': '9',
    '10月': '10',
    '11月': '11',
    '12月': '12',
    MONTH_ARRAY: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    week: '周次',
    weeks: {
      sun: '日',
      mon: '一',
      tue: '二',
      wed: '三',
      thu: '四',
      fri: '五',
      sat: '六'
    },
    months: {
      jan: '一月',
      feb: '二月',
      mar: '三月',
      apr: '四月',
      may: '五月',
      jun: '六月',
      jul: '七月',
      aug: '八月',
      sep: '九月',
      oct: '十月',
      nov: '十一月',
      dec: '十二月'
    }
  },
  VideoViewer: {
    fullScreen: '全屏',
    cancelFullScreen: '取消全屏',
    download: '下载',
    retry: '重试'
  }
};

export default localeValues;
