// English translation of Privacy.jsx. Keep it in step with the Korean page;
// the Korean version prevails. Update only the effective date on revision
// (the first-written date is fixed).
const EFFECTIVE_DATE = "September 29, 2026";
const FIRST_WRITTEN_DATE = "July 29, 2026";

export default function PrivacyPolicyEnPage() {
  return (
    <>

      <main lang="en">
        <section >
          <div >
            <h1 >
              Privacy Policy
            </h1>
            <p >
              Effective date: {EFFECTIVE_DATE} ｜ First written: {FIRST_WRITTEN_DATE}
            </p>
            <p >
              <a href="/privacy" lang="ko">한국어</a>
            </p>
            <p >
              This is an English translation. If it differs from the{" "}
              <a href="/privacy">Korean version</a>, the Korean version prevails.
            </p>

            <div >
              <section>
                <h2 >1. Who this policy covers and its scope</h2>
                <p >
                  This policy applies to the following applications distributed
                  by <strong >letspets</strong> (developer: 4sizn, a one-person
                  maker) and to this website.
                </p>
                <ul >
                  <li >
                    <h3 >Garden Eel Cove</h3>
                    <p >
                      Desktop app ｜ macOS, Windows ｜ Distributed via GitHub Releases
                    </p>
                  </li>
                  <li >
                    <h3 >Lonely Candle</h3>
                    <p >
                      Mobile app ｜ Android, iOS ｜ Distributed via GitHub Releases (APK),
                      App Store
                    </p>
                  </li>
                  <li >
                    <h3 >Swing Golf</h3>
                    <p >
                      Mobile game ｜ iOS ｜ Distributed via the App Store
                    </p>
                  </li>
                  <li >
                    <h3 >Moa</h3>
                    <p >
                      Mobile app ｜ iOS ｜ Distributed via the App Store
                    </p>
                  </li>
                  <li >
                    <h3 >Cloud Minesweeper</h3>
                    <p >
                      Mobile app ｜ iOS · Android ｜ Distributed via the App Store · Google Play
                    </p>
                  </li>
                  <li >
                    <h3 >Glass Camera</h3>
                    <p >
                      Mobile app ｜ iOS ｜ Distributed via the App Store
                    </p>
                  </li>
                  <li >
                    <h3 >letspets website</h3>
                    <p >
                      This site ｜ Static pages
                    </p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 >
                  2. Information collected and processed
                </h2>
                <p >
                  Garden Eel Cove, Moa and Glass Camera do not include any
                  advertising or analytics SDK. Moa and Glass Camera do not
                  communicate over the network. Moa, Cloud Minesweeper and Glass
                  Camera do not send photos, videos or analysis results to a
                  server, and none of the three apps creates an account. Lonely
                  Candle, Swing Golf and Cloud Minesweeper also do not directly
                  collect or ask for accounts, contacts, location, photos or
                  files, or payment information. However, to serve and measure
                  the ads shown in these three apps and to prevent fraud, the
                  Google Mobile Ads SDK (AdMob) may automatically process the
                  following information.
                </p>
                <ul >
                  <li>Advertising identifiers and device and app information</li>
                  <li>Network information such as IP address</li>
                  <li>Ad display and interaction information, and ad performance measurement information</li>
                  <li>Diagnostic and fraud-prevention information from the ad-serving process</li>
                </ul>
                <p >
                  Google processes this information for ad serving, measurement,
                  security and policy compliance, and Google's Privacy Policy
                  governs the scope of processing and how it is retained.
                  letspets does not access or sell the raw identifiers collected
                  by the ad SDK.
                </p>
              </section>

              <section>
                <h2 >
                  3. Access to sensitive permissions: microphone and motion sensors
                </h2>
                <p >
                  Lonely Candle uses the following permissions for the
                  interaction of blowing out the candle with your breath, and
                  Swing Golf uses them to read a swing in which you actually
                  swing the device. In every case, input values are used
                  immediately for calculation on the device and then discarded;
                  they are not stored or sent outside the device.
                </p>
                <div >
                  <div >
                    <h3 >
                      Microphone (Android RECORD_AUDIO)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Judges the strength of your breath to make the flame
                        flicker or go out.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Reads only the real-time volume (RMS) of the microphone
                        input and converts it into a wind-strength value. It does
                        not perform speech recognition and cannot tell what you
                        are saying.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Does not create recording files, does not store audio on
                        the device, and does not send it outside the device.
                      </li>
                      <li>
                        <strong >If you decline</strong>:
                        The app works normally without the microphone permission;
                        only the blow-out feature does not work. You can also put
                        out the candle by tapping the wick on the screen.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Motion sensors (gyroscope, accelerometer, gravity)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        In Lonely Candle, tilting the device makes the flame sway
                        in the direction of gravity. Swing Golf reads the
                        strength of your arm swing and uses it as the power for
                        hitting the ball.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Only the current tilt and acceleration values are used
                        for that frame's on-screen rendering and power
                        calculation. On both Android and iOS, motion sensors do
                        not require a separate permission.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Sensor values themselves are not stored or transmitted.
                        Only Swing Golf's swing sensitivity settings and
                        calibration values remain on the device (see Section 4
                        below).
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Reading and deleting from the photo library (Moa, iOS photo access permission)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Organizes the screenshots piled up in your library into
                        folders and tags by content.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Reads only images that iOS marks as screenshots. It does
                        not read regular photos, Live Photos or screen
                        recordings. Text recognition and image analysis are
                        completed on the iPhone using the model included in the
                        app and iOS's on-device features.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Does not copy original photos and does not touch albums in
                        the Photos app. Images and recognized text are not sent
                        outside the device. Originals are deleted only when you
                        choose ‘Also delete original’ and allow it in the iOS
                        confirmation dialog, and deleted originals are moved to
                        ‘Recently Deleted’ in the Photos app. ‘Remove from Moa
                        only’ removes the item only from the list in the app and
                        leaves the original as it is.
                      </li>
                      <li>
                        <strong >If you decline</strong>:
                        The app still opens without the permission, and you can
                        explore its features with sample screens. If you allow
                        only some photos, it organizes only the screenshots you
                        allowed.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Camera (Cloud Minesweeper, iOS · Android camera permission)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Takes a photo of the sky and builds a Minesweeper board
                        from the shapes of the clouds in the photo.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Reading the cloud areas in the photo is completed on the
                        phone using the model included in the app. It does not
                        read the photo library and does not save the photos it
                        takes to the library.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Photos and reading results are not sent outside the
                        device. After the board is built, the app attempts to
                        delete the temporary capture file. If the app terminates
                        abnormally, the temporary file may remain; in that case
                        it is removed when you delete the app.
                      </li>
                      <li>
                        <strong >If you decline</strong>:
                        You cannot build a board by taking a photo. From the
                        permission notice you can go to the system app settings
                        and allow it again.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Device orientation (Cloud Minesweeper, rotation sensor)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Places the clouds you have collected in the sky in the
                        direction the phone is facing, so you can find them
                        again.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Only the orientation values calculated by the operating
                        system are used to draw the screen. No separate
                        permission is required.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Sensor values themselves are not stored or transmitted.
                        Only the direction in which a cloud was hung remains in
                        the collection on the device (see Section 4 below).
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Camera (Glass Camera, iOS camera permission)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Shows the scene in front of you through patterned glass,
                        and takes photos and videos exactly as they appear on the
                        screen.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        The glass refraction calculation is completed on the
                        iPhone's GPU every frame. Video frames are not sent
                        outside the app, and faces or objects are not
                        recognized.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Preview frames that are not captured are not stored. Only
                        captured results are handled as described in the photo
                        library item below. If you decline the camera
                        permission, you can see the effect on sample photos
                        included in the app.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Microphone (Glass Camera, iOS microphone permission)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Records the surrounding sound along with the video when
                        you record a video.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Recorded sound goes straight into the video file. Speech
                        is not recognized or analyzed.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        It remains only inside the finished video file and is not
                        sent outside the device. If you decline the permission,
                        videos are recorded without sound.
                      </li>
                    </ul>
                  </div>
                  <div >
                    <h3 >
                      Saving to the photo library (Glass Camera, iOS add-photos permission)
                    </h3>
                    <ul >
                      <li>
                        <strong >Purpose</strong>:
                        Saves the photos and videos you take to your photo
                        library.
                      </li>
                      <li>
                        <strong >How it is processed</strong>:
                        Uses only the add permission and does not read the
                        library. When you load a photo yourself to see the
                        effect, the operating system's photo picker is used, so
                        the app does not access your whole library.
                      </li>
                      <li>
                        <strong >Storage and transmission</strong>:
                        Saving happens only on your device. If saving to the
                        library fails, the result is kept in the app so you can
                        save or share it again.
                      </li>
                    </ul>
                  </div>
                </div>
                <p >
                  Garden Eel Cove does not use sensitive permissions such as the
                  microphone, camera or location. The mouse cursor position is
                  referenced only as screen coordinates to decide whether the
                  eels should flee, and it is not recorded.
                </p>
              </section>

              <section>
                <h2 >4. Information stored on the device</h2>
                <ul >
                  <li>
                    <strong >Garden Eel Cove</strong>:
                    The number of eels caught and the number of feedings exist
                    only in memory while the app is running and disappear when
                    you quit the app. No separate save file is created.
                  </li>
                  <li>
                    <strong >
                      Garden Eel Cove (Windows only)
                    </strong>:
                    Writes a single internal state value, used to decide
                    whether clicks pass through the window, to a file in the app
                    data folder. It is not information that can identify you.
                  </li>
                  <li>
                    <strong >Lonely Candle</strong>:
                    Records the actual number of times the candle has been put
                    out and the state of the ad display interval in the app's
                    storage area. These values are used only on the device and do
                    not identify you. They are removed when you delete the app.
                  </li>
                  <li>
                    <strong >Moa</strong>: Records the text
                    recognized in screenshots, the automatically assigned
                    categories and tags, and the titles, folders and favorites you
                    have edited, only in the app's storage area on the iPhone.
                    This file is excluded from iCloud backup and disappears when
                    you delete the app. Original photos are deleted only when you
                    choose to delete them yourself.
                  </li>
                  <li>
                    <strong >Cloud Minesweeper</strong>:
                    Records the shapes and difficulty of completed cloud pieces,
                    success records, and the direction and distance at which they
                    were hung, only in the app's storage area on the phone. The
                    last state, used to restore a board in progress, also remains
                    in the same area. It is not information that can identify
                    you, and it disappears when you delete the app. Depending on
                    operating system settings, this file may be included in
                    device backups.
                  </li>
                  <li>
                    <strong >Glass Camera</strong>:
                    Records the chosen glass pattern and dial values (cell size,
                    curvature, thickness, etc.) only in the app's storage area on
                    the iPhone. Photos and videos you take stay briefly in the
                    app's temporary area before being added to the photo library,
                    and are cleaned up once saving to the library is complete. It
                    is not information that can identify you, and the settings
                    and temporary files disappear when you delete the app.
                  </li>
                  <li>
                    <strong >Swing Golf</strong>: Records
                    best records per hole (strokes and time), swing and putter
                    sensitivity settings, the maximum swing value registered
                    through calibration, and the game mode selection, only in the
                    app's storage area on the device. The score card image created
                    after a round is also saved on the device, and sharing happens
                    only when you choose it yourself. None of this is information
                    that can identify you, and it disappears when you delete the
                    app.
                  </li>
                </ul>
              </section>

              <section>
                <h2 >5. Provision to third parties and ad consent</h2>
                <p >
                  letspets does not directly sell user information or provide it
                  to advertisers. Lonely Candle, Swing Golf and Cloud Minesweeper
                  serve ads through the Google Mobile Ads SDK, and Google may
                  process the information in Section 2 above under its own
                  privacy policy. You can find how Google processes it in the{" "}
                  <a

                    href="https://policies.google.com/privacy"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </p>
                <p >
                  In regions where it is required, the three apps request
                  ad-related consent through the Google User Messaging Platform
                  (UMP), and they do not start ad requests if the consent status
                  cannot be confirmed or if consent is required but has not been
                  completed. Information about consent choices and how to
                  withdraw them is shown on the consent screen provided by
                  Google.
                </p>
                <ul >
                  <li>
                    <strong >GitHub</strong>: Installation
                    files are distributed through GitHub Releases. Access logs
                    when files are downloaded are processed by GitHub.
                  </li>
                  <li>
                    <strong >Apple App Store</strong>:
                    Swing Golf, Moa, Cloud Minesweeper, Glass Camera and Lonely
                    Candle for iOS are distributed through the App Store.
                    Installation and purchase history and device information are
                    processed by Apple, and the developer can see only the
                    aggregated statistics Apple provides.
                  </li>
                  <li>
                    <strong >Google Play</strong>:
                    Android apps are distributed through Google Play.
                    Installation history and device information are processed by
                    Google, and the developer can see only the aggregated
                    statistics Google provides.
                  </li>
                  <li>
                    <strong >Google Fonts</strong>: This
                    website loads an icon font from Google Fonts to display
                    icons. In this process, visitors' IP addresses and browser
                    information may be passed to Google. Body text fonts are
                    served by the site itself, so no additional requests occur.
                  </li>
                </ul>
              </section>

              <section>
                <h2 >6. Website usage information</h2>
                <p >
                  This website does not use cookies, does not write data to
                  browser storage, and has no visitor analytics tools installed.
                  It does not identify or track visitors.
                </p>
                <p >
                  This website is provided through the hosting service of Vercel
                  Inc. Standard access logs needed to operate the service
                  (request time, IP address, etc.) are processed by Vercel, and
                  this part follows{" "}
                  <a

                    href="https://vercel.com/legal/privacy-policy"
                  >
                    Vercel's Privacy Policy
                  </a>
                  . letspets does not access these logs to analyze visitors.
                </p>
              </section>

              <section>
                <h2 >
                  7. Data retention period and deletion
                </h2>
                <ul >
                  <li>
                    letspets does not store user data such as accounts or
                    contacts on its own servers. However, retention and deletion
                    of the information Google processes in the course of serving
                    ads in Lonely Candle, Swing Golf and Cloud Minesweeper follow
                    Google's Privacy Policy.
                  </li>
                  <li>
                    Microphone and sensor input is used and discarded as soon as
                    the screen is drawn, and is not kept anywhere.
                  </li>
                  <li>
                    Information that remains on the device (Section 4 above) is
                    removed when you delete the app. The Windows state file is
                    deleted when you clear the app data folder.
                  </li>
                </ul>
              </section>

              <section>
                <h2 >8. Secure data handling</h2>
                <p >
                  letspets does not store account or contact information on its
                  own servers. Ad requests in Lonely Candle, Swing Golf and Cloud
                  Minesweeper are handled through the Google Mobile Ads SDK with
                  TLS applied, and the security of the ad information Google
                  processes follows Google's policies and technical safeguards.
                </p>
                <p >
                  There is something to disclose about the installation files.
                  The current macOS build is self-signed (ad hoc) and the Windows
                  build is not code-signed, so a Gatekeeper or SmartScreen
                  warning appears during installation. When downloading files,
                  we recommend getting them only from the GitHub Releases
                  location above.
                </p>
              </section>

              <section>
                <h2 >9. Children's personal information</h2>
                <p >
                  letspets does not ask for or store age. However, the ad SDK in
                  Lonely Candle, Swing Golf and Cloud Minesweeper may process the
                  information listed in Section 2 above. Parents and guardians
                  can send questions about their child's use of the apps and
                  ad-related choices to the contact below.
                </p>
              </section>

              <section>
                <h2 >10. Changes to this policy</h2>
                <p >
                  If this policy changes, the revisions and the effective date
                  will be posted on this page. If the way data is processed
                  changes substantially, the changes will be announced before
                  the effective date.
                </p>
              </section>

              <section>
                <h2 >11. Contact</h2>
                <p >
                  For questions about this policy or the processing of personal
                  information, send an email to the address below and it will be
                  reviewed. Technical matters can also be left as a GitHub
                  issue.
                </p>
                <div >
                  <p >
                    Developer: 4sizn (letspets)
                  </p>
                  <a

                    href="mailto:4sizn@naver.com"
                  >
                    <span >mail</span>
                    4sizn@naver.com
                  </a>
                  <a

                    href="https://github.com/4sizn/gardeneel-desktop/issues"
                  >
                    github.com/4sizn/gardeneel-desktop/issues

                  </a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
