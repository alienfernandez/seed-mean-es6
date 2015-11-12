class CommonController {
  constructor() {
    setTimeout(() => {
      this.onInit();
    }, 10);
  }
  //
  onInit() {}
  onDestroy() {}
}

export default CommonController;
