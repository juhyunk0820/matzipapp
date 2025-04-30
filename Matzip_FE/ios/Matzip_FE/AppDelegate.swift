import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import GoogleMaps //import 추가

@main
  class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    GMSServices.provideAPIKey("AIzaSyAYYhxz8PvPSi8C25VAa7yOwhHrCAZR0zU")  //googlemaps key 추가
    
    self.moduleName = "Matzip_FE"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    // RCTAppDelegate 내부에서 창과 rootView를 만든 뒤
    // 스플래시를 띄워야 하므로 먼저 super 호출
    let ok = super.application(
      application,
      didFinishLaunchingWithOptions: launchOptions
    )

    // 네이티브 스플래시 화면 표시
    RNSplashScreen.show()

    return ok

    // return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
