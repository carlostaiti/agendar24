(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[333],{a882:function(n,e,a){"use strict";a.r(e),e["default"]='<template>\n  <div style="max-width: 800px; width: 100%;">\n    <q-calendar\n      v-model="selectedDate"\n      view="week"\n      locale="en-us"\n      :now="now"\n      style="height: 400px;"\n    />\n  </div>\n</template>\n\n<script>\n// normally you would not import "all" of QCalendar, but is needed for this example to work with UMD (codepen)\nimport QCalendar from \'ui\' // ui is aliased from \'@quasar/quasar-ui-qcalendar\'\n\nexport default {\n  data () {\n    return {\n      selectedDate: \'\',\n      now: \'\'\n    }\n  },\n\n  beforeMount () {\n    // set "now" to previous day, unless today is sunday\n    this.selectedDate = QCalendar.today()\n    const now = QCalendar.parseTimestamp(this.selectedDate)\n    if (now.weekday === 0) {\n      this.now = QCalendar.getDate(QCalendar.nextDay(now))\n    }\n    else {\n      this.now = QCalendar.getDate(QCalendar.prevDay(now))\n    }\n  }\n}\n<\/script>\n'}}]);