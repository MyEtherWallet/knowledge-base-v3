/*
Title: Tiếng Việt
Sort: 2
*/

#### Một số lưu ý!

*   **Ethereum, MyEtherWallet.com & MyEtherWallet CX, và các nền tảng khác từ Javascript libraries mà chúng tôi sử dụng đang được phát triển một cách tích cực.** Mặc dù toàn bộ đã được chúng tôi kiễm tra rất kỹ lưỡng và hàng chục nghìn địa chỉ Ví đã được tạo thành công từ người sử dụng trên toàn cầu, nhưng vẫn có những vấn đề có thể xảy ra làm cho ETH của bạn bị mất đi. Xin vui lòng không nên đầu tư với số tiền nhiều hơn khả năng mà bạn đã cho rằng nó sẽ mất và hãy luôn cẩn thận. Trong trường hợp rủi ro xảy ra, chung tôi rất chân thành xin lỗi. Tuy nhiên **Chúng tôi sẽ không chịu bất cứ một trách nhiệm nào đối với số lượng Ether mà bạn đã bị mất!**.
*   MyEtherWallet.com & MyEtherWallet CX không phải "Ví Web". Vì vậy bạn không tạo tài khoản sau đó gửi số Ether của bạn cho chúng tôi dễ giữ hộ. Toàn bộ Dữ liệu sẽ không bao giờ bị rò rỉ ra khỏi máy tính/trình duyệt của bạn. Chúng tôi xây dựng nó nhằm giúp người sử dụng có thể đễ dàng tạo mới, lưu trữ và truy cập thông tin Ví của bạn và tương tác với Blockchain.
*   Nếu bạn không lưu lại Private key và mật khẩu của bạn, thì sẽ không có bất cứ một cách nào có thể khôi phục lại Ví và tài sản hiện đang chứa trong Ví. Bạn nên sao lưu dữ liệu Ví tại nhiều nơi và những thiết bị lưu trữ khác nhau!

---

#### Tôi mới sử dụng lần đầu tiên. Tôi phải làm gì?

MyEtherWallet giúp bạn có khả năng tạo Ví mới dùng dễ lưu trữ số lượng Ether của ban bởi chính mình, Ví được tạo ra không nằm trên bất cứ một sàn giao dịch nào. Quá trình tạo Ví điễn ra hoàn toàn trên máy tính cá nhân của bạn chứ không phải trên hệ thống máy chủ của chúng tôi. Do đó, khi bạn khởi tạo một Ví mới, **bạn chịu trách nhiệm hoàn toàn về vấn đề sao lưu dữ liệu đối với Ví được tạo**.

1.  Khởi Tạo Một Ví Mới.
2.  Sao Lưu Dữ Liệu Ví.
3.  Xác thực rằng bạn có quyền truy cập vào ví mới này và hãy chắc chắn đã sao lưu tất cả các thông tin cần thiết.
4.  Gửi Ether đến Ví mới này.

---

#### Làm thế nào dễ khởi tạo một Ví mới?

1.  Đi đến trang "Tạo Ví".
2.  Nhập một mật khẩu mạnh. Nếu bạn nghĩ có thể quên mật khẩu thì bạn nên lưu nó lại một nơi nào đó thật an toàn. bạn sẽ cần đến mật khẩu này dễ gửi đi một giao dịch.
3.  Chọn "Tạo Ví".
4.  Ví của bạn sẽ được tạo ngay bây giờ.

---

#### Làm thế nào dễ sao lưu Ví?

Bạn nên sao lưu tập tin Ví của bạn bên ngoài máy tính và tại nhiều nơi khác nhau - như trên USB hoặc/và một tờ giấy.

1.  Lưu lại địa chỉ Ví. Bạn có thể giữ nó cho chính mình hoặc chia sẽ nó cho bất cứ ai. Người khác có thể gửi Ether cho bạn thông qua địa chỉ Ví của bạn.
2.  Private key. Không được chia sẽ Private key cho bất cứ ai. Private key rất cần thiết khi bạn muốn truy cập vào Ví và Gửi đi một lượng Ether! hiện tại có 3 phiên bản lưu trữ dành cho Private Key:

*   **Định Dạng Keystore (UTC / JSON) (Đã mã hoá. Định Dạng này sử dụng cho Mist)** <span translate="x_KeystoreDesc" class="ng-scope">Định dạng Keystore là tập một tin chứa dữ liệu ví đã được mã hoá của Private Key và sử dụng cho Mist. Do đó bạn có thể dễ dàng bỏ nó vào bên trong Mist và tiếp tục sử dụng ví của bạn. Đây là một tập tin được đề xuất nhằm sao lưu dữ liệu ví cá nhân.</span>
*   **Định Dạng JSON (Không mã hoá)** <span translate="x_JsonDesc" class="ng-scope">Định Dạng JSON là một tập tin chứa dữ liệu ví chưa được mã hoá của Private Key. Bạn có thể đăng nhập vào ví của bạn bằng việc sử dụng định dạng JSON mà không cần đến mật khẩu. Vì vậy, bất kỳ người nào sở hữu định dạng JSON của bạn thì họ đều có khả năng đăng nhập vào ví của bạn mà không cần đến mật khẩu.</span>
*   **Private Key (Không mã hoá)** <span translate="x_PrivKeyDesc" class="ng-scope">Đây là một đoạn dữ liệu có định dạng bằng văn bản không bị mã hoá và nó chính là private key của bạn. Nếu người nào sở hữu Private Key của bạn thì họ có thể truy cập vào ví của bạn mà không cần đến mật khẩu. Vì vậy, Chúng tôi khuyên bạn nên dùng phiên bản có định dạng đã được mã hoá.</span>

4.  Place your address, versions of the private key, and the PDF version of your paper wallet in a folder. Save this on your computer and a USB drive.
5.  Bạn Có thể in Ví giấy nếu bạn sở hữu máy in. Ngoài ra, bạn có thể ghi lại Private key và địa chỉ Ví của bạn lên một tờ giấy. Hãy Cất giữ chúng tại một nơi an toàn, hãy ngắt kết nối hoàn toàn giữa máy tính và USB của bạn.
6.  Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).

---

#### Làm thế nào dễ bảo mật Ví / offline / lưu trữ lạnh cùng với MyEtherWallet?

1.  Đến trang github của chúng tôi: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Chọn vào ô `dist-vX.X.X.X.zip`.
3.  Chuyển tiếp tập tin zip đi đến máy tính airgapped.
4.  Giải nén tập tin Zip và nhấn kép chuột vào tập tin `index.html`.
5.  Khởi tạo một Ví cá nhân mới cùng với một mật khẩu mạnh.
6.  Lưu giữ lại địa chỉ Ví vừa tạo. Lưu giữ lại các định dạng của Private key. Lưu giữ lại mật khẩu của bạn nếu bạn không hoàn toàn nhớ nó mãi mãi.
7.  Cất giữ tờ giáy mà bạn đã ghi lên / USB tại nhiều nơi riêng biệt.
8.  đi đến trang "Xem thông tin Ví" và gõ vào Private key của bạn / mật khẩu nhằm đảm bảo rằng nó hoàn toàn chính xác và truy cập vào Ví. kiễm tra lại mật khẩu mà bạn ghi lại trên giấy có giống nhau hay chưa.

Keep in mind, you must prevent loss of the keys and password due to loss or failure of you hard drive failure, or USB drive, or piece of paper. You also must keep in mind physical loss / damage of an entire area (think fire or flood).

---

#### Làm thế nào dễ xác minh và truy cập vào Ví mới được khởi tạo?

**Trước khi bạn gửi số lượng Ether vô Ví mới của bạn**, bạn nên chắc chắn rằng bạn đã truy cập vào Ví thành công.

1.  Đi đến trang "Xem Thông Tin Ví".
2.  Chọn tập tin định dạng Ví của bạn -hoặc- sử dụng Private key của bạn dễ mở khoá Ví.
3.  Nếu Ví của bạn được mã hoá, ô điền thông tin sẽ tự động báo lại. Nhập mật khẩu.
4.  Chọn vào ô "Mở khoá Ví".
5.  Your wallet information should show up. Find your account address, next to a colorful, circular icon. This icon visually represents your address. Be certain that the address is the address you have saved to your text document and is on your paper wallet.
6.  If you are planning on holding a large amount of ether, we recommend that send a small amount of ether from new wallet before depositing a large amount. Send 0.001 ether to your new wallet, access that wallet, send that 0.001 ether to another address, and ensure everything works smoothly.

---

#### Làm thế nào dễ gửi Ether từ Ví này sang Ví khác ?

Nếu như bạn dự định dễ chuyển một số lượng lớn Ether, bạn nên gửi đi một lượng nhỏ đến Ví của bạn dễ thử nghiệm, nhằm xác định chắc chắn tất cả chức năng đều hoạt động đúng như dự định.

1.  Đi đến trang "Gửi Ether và Tokens".
2.  Chọn tập tin Ví -hoặc- Private key của bạn dễ mở khoá cho Ví.
3.  Nếu Ví của bạn đang trong tình trạng mã hoá,ô điền thông tin sẽ tự động báo lại. Nhập mật khẩu.
4.  Chọn vào nút "Mở Khoá Ví".
5.  Điền địa chỉ mà bạn muốn gửi đến tại khung trống "Địa chỉ đến:".
6.  Điền số lượng Ether mà bạn muốn gửi đi.Hoặc bạn có thể chọn vào phần "Gửi toàn bộ số dư" nếu bạn muốn chuyển đi toàn bộ số Ether mà bạn hiện có trong tài khoản.
7.  Chọn vào "Khởi tạo Giao dịch".
8.  Một cửa sổ thông báo sẽ hiện ra. Việc khởi tạo giao dịch này được thực hiện từ trình duyệt của bạn.
9.  Chọn vào nút màu xanh "Gửi giao dịch đi" phía dưới.
10.  Một cửa sổ yêu cầu sẽ xuất hiện. Xác nhận lại số lượng cần gửi và địa chỉ đến. Sau đó chọn vào ô "Có, tôi chắc chắn! Hãy thực hiện giao dịch.".
11.  Giao dịch của bạn sẽ được gửi đi. TX Hash sẽ xuất hiện trên màn hình. Bạn có thể chọn vào TX Hash dễ xem nó trên blockchain.

---

#### Làm thế nào dễ kích hoạt MyEtherWallet.com với tính năng offline?

Bạn hãy kích hoạt MyEtherWallet.com trên máy tính của bạn thay thế cho việc chạy trên máy chủ của Github. Bạn có thể khởi tạo Ví mới hoàn toàn trong tình trạng offline và gửi giao dịch đi từ trang "Giao dịch Offline".

1.  Đến trang github của chúng tôi: [https://github.com/kvhnuke/etherwallet/releases/latest](https://github.com/kvhnuke/etherwallet/releases/latest).
2.  Chọn vào ô `dist-vX.X.X.X.zip`.
3.  Chuyển tiếp tập tin zip đi đến máy tính airgapped.
4.  Giải nén tập tin Zip và nhấn kép chuột vào tập tin `index.html`.
5.  MyEtherWallet.com sẽ được chạy hoàn toàn trên máy tính của bạn.

Trong trường hợp bạn chưa quen với việc sử dụng này, bạn cần nên giữ nguyên toàn bộ thư mục và chừa một phần dung lượng vừa đủ để chạy trang web, không chỉ riêng tập tin `index.html`. Không nên thử mở lên hoặc di chuyển bất cứ một tập tin nào trong thư mục. Nếu bạn lưu trữ một bản sao tập tin repo của MyEtherWallet, chúng tôi khuyên bạn nên lưu trữ tập tin nén nhằm chắc chắn các nội dung của thư mục được giữ nguyên.

Cũng như việc chúng tôi liên tục cập nhật MyEtherWallet.com, vì vậy chúng tôi khuyên bạn nên cập nhận định kì cho các tập tin đã Lưu của định dạng repo.

---

#### Làm thế nào dễ gửi token và thêm Token vào Ví?

[Ethplorer.io](https://ethplorer.io/) là cách tốt nhất dễ kiễm tra Token và số Token.

1.  Đi đến trang "Gửi Ether và Tokens".
2.  mở khoá Ví của bạn.
3.  Điền địa chỉ mà bạn cần gửi đến tại ô trống "Địa chỉ đến:" .
4.  Điền số lượng Token mà bạn muốn gửi.
5.  Chọn loại Token mà bạn muốn gửi đi.
6.  Nếu bạn không thấy Token của bạn hiển thị trên trang chúng tôi:

1.  Chọn vào "Custom".
2.  Điền địa chỉ, tên, đơn vị số thập phân của loại Token mà bạn muốn. Chúng được cung cấp bởi các nhà phát triển Token và nó cũng cần thiết khi bạn "thêm vào dễ xem Token" trên Mist.
3.  Chọn "Lưu".
4.  Bạn có thể gửi token cũng như bạn sẽ nhìn thấy số dư của nó nằm ở khung bên cạnh.

8.  Chọn "Khởi tạo giao dịch".
9.  Một thông báo sẽ xuất hiện và xác thực rằng đây là việc khởi tạo giao dịch từ trình duyệt của bạn.
10.  Chọn vào nút màu xanh phía dưới "Gửi giao dịch đi".
11.  Sau đó một thông báo sẽ xuất hiện. Xác thực lại số lượng Ether và địa chỉ đến. sau đó nhấn vào nút "Có, Tôi chắc chắn! Hãy thực hiện giao dịch.".
12.  Giao dịch của bạn sẽ được Thực hiện. TXid sẽ hiển thị cho bạn. Bạn có thể chọn vào TXid và nhìn ấy giao dịch của bạn trên blockchain.

---

#### Những gì sẽ xảy ra nếu trang của chúng tôi bị sập?

MyEtherWallet không phải là Ví online. Bạn không cần phải đăng nhập và không có bất cứ gì được lưu lại trên máy chủ của chúng tôi. Đây chỉ đơn giản là một giao diện cho phép bạn tương tác với blockchain.

Nếu MyEtherWallet.com bị sập, bạn sẽ phải tìm một giải pháp khác (như là geth hoặc Ví Ethereum / Mist) dễ tiếp tục thực hiện giao dịch. Nhưng bạn không cần thiết phải "Mang" Ether của bạn ra khỏi MyEtherWallet bởi vì số Ether đó không nằm trong MyEtherWallet. Bởi vì số Ether đó đang nằm trong Ví Ethereum được khởi tạo thông qua trang của chúng tôi.

Bạn chỉ cần bỏ tập tin chứa định dạng mã hoá Private key của bạn vào và Geth/Mist sẽ tự động giải mã tập tin (mã hoá) trực tiếp bên trong geth / Ví Ethereum / Mist một cách dễ dàng. Xem câu hỏi #12.

Ngoài ra, Khả năng xảy ra vấn đề trang MyEtherWallet bị sập là rất khó. Cũng như việc chúng tôi không lưu trữ lại bất cứ dữ liệu gì vì vậy giá trị của nó sở hữu hoàn toàn bằng không. Nếu chúng tôi buộc phải tháo tên miền này xuống, thì toàn bộ sẽ vẫn còn, tồn tại và công khai trên trang [https://github.com/kvhnuke/etherwallet](https://github.com/kvhnuke/etherwallet/tree/gh-pages). Bạn có thể tải tập tin nén của nó và chạy nó trực tiếp trên máy tính của bạn.

---

#### Có phải trang "Gửi Ether" là trang offline?

Không. Nó cần kết nối internet dễ xác định được giá Gas hiện tại, nonce của tài khoản, và phát tán các dữ liệu dễ xác thực các giao dịch (không "gửi" nó đi). Tuy nhiên, nó chỉ gửi đi khi giao dịch của bạn được ký từ chính bạn. Private key của bạn hoàn toàn an toàn từ bạn. hiện nay, chúng tôi có hỗ trợ thêm chức năng "Giao dịch Offline" dễ bạn có thể đảm bảo Private key của bạn đang trong tình trạng offline/airgapped của máy tính trong bất cứ lúc nào.

---

#### Làm thế nào dễ tạo giao dịch Offline?

1.  Đi đến trang "Giao dịch Offline" thông qua máy tính đang online.
2.  Điền vào "Địa chỉ gửi". Lưu ý, đây là địa chỉ mà bạn dùng dễ gửi, không phải là địa chỉ đến. và nó sẽ khởi tạo nonce và xác định giá Gas hiện tại.
3.  Sau đó, chuyển đến máy tính Offline của bạn. Điền vào "Địa chỉ đến" và "Số cần gửi" mà bạn muốn gửi đi.
4.  Điền vào "Giá Gas" được hiển thị trên máy tính online của bạn ở bước #1.
5.  Điền vào "NONCE" được hiển thị trên máy tính online của bạn ở bước #1.
6.  Sau đó "Giới hạn GAS" sẽ được mặc định với số gas là 21000\. Điều này sẽ khởi tạo một giao dịch thông thường. Nếu bạn gửi đi một hợp đồng hoặc bổ sung thêm dữ liệu vối với giao dịch của bạn, bạn cần phải tăng lên số Giới hạn gas và bất kì gas dư thừa sẽ được hoàn trả lại cho bạn.
7.  Nếu bạn muốn, Thêm vào một số dữ liệu. Nếu bạn điền dữ liệu vào, bạn sẽ cần số Giới hạn gas nhiều hơn số 21000 được mạc định ban đầu. Tất cả dữ liệu đều ở định dạng HEX .
8.  Chọn tập tin Ví của bạn -hoặc- Private key của bạn dễ mở khoá Ví.
9.  nhấn vào nút "Khởi tạo Chữ Ký cho giao dịch".
10.  Các trường dữ liệu phía dưới nút này sẽ dùng dễ chứng thực chữ ký cho giao dịch của bạn. Cóp hết đoạn dữ liệu này và chuyển đến máy tính online của bạn.
11.  Trên máy tính online của bạn, bạn hãy dán chữ ký giao dịch vào khung điền văn bản tại bước #3 và chọn nút "Gửi Ether". Việc làm này sẽ phát sóng đi giao dịch của bạn.

---

#### Làm thế nào dễ tôi sử dụng Ví được khởi tạo từ MyEtherWallet trên geth / Ví Ethereum / Mist?

Bạn phải sử dụng tập tin chứa định dạng JSON dành cho Geth/Mist từ MyEtherWallet v2+....

1.  Đi đến trang "Xem Thông Tin Ví".
2.  Mở khoá Ví và sử dụng định dạng **mã hoá** private key của bạn hoặc tập tin chứa định dạng JSON.
3.  Tìm phần "Tải về định dạng JSON - định dạng Geth/Mist (Mã hoá)". Nhấn vào nút "Tải về máy" nằm phía dưới. Bây giờ bạn đã sở hữu định dạng Keystone.
4.  Truy cập Ví trên ứng dụng Ví Ethereum.
5.  Tại thanh Menu, bạn chọn như sau "Accounts" -> "Backup" -> "Accounts"
6.  Bạn sẽ mở thư mục keystore của bạn ra. Sao chép tập tin mà bạn đã tải về máy (`UTC--2016-04-14......../`) vào trong thư mục keystone.
7.  Tài khoản của bạn sẽ hiển thị ngay dưới phần "Accounts."

Sử dụng Private key không mã hóa của bạn...

1.  Nếu bạn chưa sở hữu private key không mã hoá , hãy đi đến trang "Xem thông tin Ví".
2.  Chọn tập tin Ví của bạn -hoặc- Private key của bạn dễ mở khoá Ví.
3.  Sao chép Private Key (không mã hoá) của bạn.
4.  Nếu bạn sử dụng máy MAC:

*   Mở phần Text Edit và dán private key này vào.
*   Tại thanh menu bạn hãy chọn "Format" -> "Make Plain Text".
*   Lưu tập tin này trên `desktop/` của bạn như `nothing_special_delete_me.txt`. chắc chắn rằng nó được khai báo "UTF-8" và " Nếu không có phần mở rộng được cung cấp sử dụng .text" và lưu vào dialog.
*   Mở terminal và dùng câu lệnh như sau: `geth account import ~/Desktop/nothing_special_delete_me.txt`
*   Việc này sẽ yêu cầu bạn thực hiện một mật khẩu mới. Và nó sẽ là mật khẩu mà bạn sử dụng tại geth / Ví Ethereum / Mist . Lưu ý, Bạn phải ghi nhớ mật khẩu này.
*   Sau khi hoàn thành việc nhập Ví trên ứng dụng, bạn nên xoá tập tin `nothing_special_delete_me.txt`
*   Trong lần sử dụng ứng dụng Ví Ethereum sau này, Tài khoản của bạn sẽ tự đọng liên kết và hiển thị dưới phần "Accounts".

6.  Nếu bạn sử dụng máy PC:

*   Mở mục Notepad & dán private key vào
*   Lưu tập tin lại với tên như sau `nothing_special_delete_me.txt` tại ổ đĩa `C:`
*   Sử dụng câu lệnh, `geth account import C:\nothing_special_delete_me.txt`
*   Việc này sẽ yêu cầu bạn thực hiện một mật khẩu mới. Và nó sẽ là mật khẩu mà bạn sử dụng tại geth / Ví Ethereum / Mist . Lưu ý, Bạn phải ghi nhớ mật khẩu này.
*   Sau khi hoàn thành việc nhập Ví trên ứng dụng, bạn nên xoá tập tin `nothing_special_delete_me.txt`
*   Trong lần sử dụng ứng dụng Ví Ethereum sau này, Tài khoản của bạn sẽ tự đọng liên kết và hiển thị dưới phần "Accounts".

---

#### Một số trang khi khởi tạo Private key thông qua việc di chuyển con trỏ chuột máy tính trên màn hình. MyEtherWallet.com không làm theo cách này. Các ký tự Private key được tạo ra trên trang MyEtherWallet một cách an toàn nhất?

Mặc dù chúng tôi hiểu với việc di chuyển chuột xung quanh màn hình như vậy sẽ khá thú vị, nhưng thực tế window.crypto sẽ đảm bảo việc tạo ra những "dữ liệu ngẫu nhiên" hơn đối với việc di chuyển chuột. Việc di chuyển chuột như vậy không phải là không an toàn, nhưng thông qua rất nhiều những thử nghiệm về mật mã khác thì chúng tôi hoàn toàn tin tưởng vào window.crypto. Ngoài ra, MyEtherWallet.com còn được sử dụng trên những thiết bị cảm ứng. Đây là [Cuộc tranh cải tức giận giữa một redditor và Vitalik Buterin Liên quan đến vấn đề Di chuyển con chuột với window.crypto](https://www.reddit.com/r/ethereum/comments/2bilqg/note_there_is_a_paranoid_highsecurity_way_to/cj5sgrm) and here is the [the window.crypto w3 spec](https://dvcs.w3.org/hg/webcrypto-api/raw-file/tip/spec/Overview.html#dfn-GlobalCrypto).

---

#### Vì sao tài khoản của tôi vừa tạo lại không tồn tại trên Blockchain Explorer? (bao gồm: etherchain, etherscan)

Tài khoản của bạn chỉ tồn tại duy nhất trên một Blockchain Explorer và tài khoản được kích hoạt khi bởi chính nó khi bạn dùng tài khoản đó và chuyển Ether vào tức khắc tài khoản sử dụng sẽ hiển thị trên hệ thống Blockchain Explorer thích hợp.

---

#### Làm thế nào dễ kiễm tra số dư hiện tại của tài khoản?

Bạn có thể sử dụng Blockchain Explorer dễ kiễm tra, Ví dụ: [etherscan.io](http://etherscan.io/). Dán địa chỉ của bạn vào khung tìm kiếm và nó sẽ hiển thị tài khoản của bạn và toạn bộ lịch sữ giao dịch đã thực hiện đối với địa chỉ này. Ví Dụ: Đây là địa chỉ của chúng tôi [donation account](http://etherscan.io/address/0x7cb57b5a97eabe94205c07890be4c1ad31e486a8) được trông thấy trên etherscan.io

---

#### Tại sao số dư tài khoản của tôi không hiển thị khi tôi truy cập vào tài khoản?

Vấn đề này rất có thể xảy ra nếu như máy tính của bạn đang kích hoạt tường lửa. Các API mà chúng tôi sử dụng nhằm tải xuống số Dư của hiện có của tài khoản và chuyển đổi số dư thường bị chặn bởi tường lửa bởi bất kì lý do nào. Nhưng bạn vẫn có thể gửi đi các giao dịch và bạn chỉ cần sử dụng một phương pháp khác dễ kiễm tra số dư của bạn hiện tại trước và sau khi giao dịch được thực hiện, ví dụ: etherscan.io

---

#### Tập tin chứa định dạng Geth của ví tôi nằm ở đâu?

*   Mac: `~/Library/Ethereum/keystore`
*   Linux: `~/.ethereum/keystore`
*   Windows: `%APPDATA%/Ethereum/keystore`

---

#### Tập tin chứa dịnh dạng Mist của ví tôi nằm ở đâu?

Tập tin chứa định dạng dành cho Ví mist nằm ở mục the file locations phía trên, nó rất đễ dàng dễ mở Mist, Chọn "Accounts" hàng đầu tiên của thanh công cụ, chọn "Backup", và chọn "Accounts". Nó sẽ mở ra thư mục hiện tại đang lưu trữ tập tin định dạng Ví của bạn.

---

#### Tập tin Pre-sale cho Ví của tôi nằm ở đâu?

Cho dù bạn lưu trữ nó ở đâu. ;) nó cũng đều được gửi đến email của bạn, vì vậy hãy kiễm tra email. Kiếm tập tin mang tên `"ethereum_wallet_backup.json"` và sau đó chọn tập tin này. Tập tin Ví này thường đc mã hoá bởi một mật khẩu khi bạn khởi tạo nó trong lúc bạn thanh toán trong thời gian pre-sale.

---

#### có thể xảy ra trường hợp có một cá nhân nào đó sử dụng ngẫu nhiên một Private key dễ thấy được số dư tài khoản của một người khác và chuyển số Ether đó vào địa chỉ mà cá nhân dó sở hữu hay không?

Đối với phiên bản ngắn: Điều đó có thể xảy ra, nhưng việc chọn ngẫu nhiên dễ nhằm tìm kiếm một tài khoản chứa Ether là một việc làm mất rất nhiều thời gian và cũng có thể mất cả vài chục năm dễ đạt được mục đích đó. bởi vậy trường hợp này được coi là rất khó dễ xảy ra.

Phiên bản dài ELI5: Bởi vậy Ethereum được dựa trên [Public Key Cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography), Đặc biệt là [Mật mã đường cong Elliptic](https://eprint.iacr.org/2013/734.pdf) Được sử dụng rất rộng rãi, không chỉ duy nhất ở Ethereum. Hầu hết các Server được bảo vệ thông qua ECC. Bitcoin cũng tương tự, cũng giống như SSH và TLS và rất nhiều thứ khác. Mã khoá của Ethereum cụ thể bao gồm 256-bit ký tự, Đoạn mã đó dài và khó đoán hơn đoạn mã 128-bit và 192-bit, mặc dù 128-bit và 192-bit hiện cũng được dùng khá rộng rãi và vẫn được nhận định là rất bảo mật từ các chuyên gia.

Tại đây bạn đang sở hữu private key và public key. private key có thể dùng thay thế cho public key, nhưng public key không thể dùng nhằm thay thế và dùng dễ phục hồi lại private key. Thực tế trên internet và các dữ liệu cần được bảo mật của thế giới đang sử dụng loại mật mã học này, có nghĩa nếu một cách nào đó nhằm dùng public key dễ phục hồi lại private key, Thì lượng Ether mà bạn bị đánh cắp nó không phải là vấn đề lớn so với nhiều vấn đề mang tính quan trọng rất lớn của những tổ chức tài chính và chính phủ trên toàn cầu.

Hiện tại chỉ khẳng định rằng nếu ai đó sở hữu được Private key của bạn thì thực sự họ mới có khả năng chuyển số Ether trong tài khoản của bạn đi được. Giống như nếu ai đó có được mật khẩu email của bạn, họ có thể đọc và gửi email, hoặc mật khẩu tài khoản ngân hàng của bạn, họ mới có thể đánh cắp tiền của bạn đi được. Bạn có thể tải về định dạng Keystore bởi vì nó là định dạng đã mã hoá dữ liệu từ Private key của bạn cùng với mật khẩu giải mã khác. Trường hợp này giống như hiện tại bạn đang có một mật khẩu A nhưng được bảo vệ bởi một mật khẩu B khác và nó giúp tài khoản của bạn càng khó bị đánh mất hơn.

Vẫn có thẻ xảy ra, theo lý thuyết thì bạn sẽ sử dụng một chuỗi gồn 64 ký tự cho đến khi bạn nhận được một kết quả đúng. Thực tế, một cá nhân thông minh có thể lập trình lên một chương trình rà kết quả đúng với Private key của bạn một cách nhanh chóng. Trường hợp này giống như "brute-forcing" hoặc "mining" private keys. Nhưng viêc làm này vẫn mất rất nhièu thời gian và rất khó. Cùng với một hệ thống Server công nghệ cao, họ có khả năng dò ngẫu nhiên 1 triệu ký tự / giây. Tuy nhiên, Việc kiễm tra ngẩu nghiên này nhằm mang lại quyền đột nhập vào tài khoản của bạn sẽ phải mất một lượng chi phí rất cao đễ duy trì hệ thống Server của họ - và dễ rà soát cho đến khi hoàn toàn chính xác được Private key của bạn thì có lẽ cá nhân đó đã già vì phải mất cả gần trăm năm dễ cho ra kết quả chính xác.

Nếu bạn hiểu toàn bộ về Bitcoin, [Điều này có thể xem qua tại:](http://bitcoin.stackexchange.com/questions/32331/two-people-with-same-public-address-how-will-people-network-know-how-to-deliver) *Nhằm làm rõ cho việc: Cho rằng mỗi satoshi của mỗi bitcoin từng được tạo ra đã gửi đến nó những private key được nó sở hữu mà không có trường hợp khác thay thế. Xác xuất dễ có một mã khoá bị trùng lặp tại hai địa chỉ khác nhau là một trong 100 quintillion, bởi vậy được coi là hoàn toàn không thể.

[Nếu bạn cần một phương pháp bảo mật cao hơn có thể tham khảo:](http://security.stackexchange.com/questions/25375/why-not-use-larger-cipher-keys/25392#25392) *Đối với đoạn mã của Private thì hầu như những công nghệ tiên tiến trên máy tính của bạn chỉ là vô nghĩa, vì khi người nào đó muốn dò ngẫu nhiên nó thì họ không cần thiết phải tấn công vào thiết bị của bạn. Nhưng đối với một mã khoá 265-bit sẽ bất khả thi đối với việc làm trên trừ khi máy tính của họ được xây dựng bởi một cái gì đó khác biệt và cực kì tiên tiến thì mới rà được và cho ra kết quả tốt nhất và trường hợp này sẽ cần rất rất nhiều thời gian và những công nghệ đó có lẽ còn phải mất rất nhiều thời gian trong tương lai dễ nghiên cứu .

Tất cả những giả đinh trên nhằm xác định rõ đoạn mã được tạo ra một cách hoàn toàn ngẫu nhiên. các mã khoá được tạo ra ở đây đáp ứng các tiêu chí, mà có thể tương tích đc với Jaxx và Mist/Geth. Ví Ethereum là tất cả những gì tuyệt vời nhất. Keys generated by brainwallets do not, as a person's brain is not capable of creating a truly random seed. There have been a number of other issues regarding lack of entropy or seeds not being generated in a truly random way in Bitcoin-land, but that's a separate issue that can wait for another day.

---

#### Bảo Mật

Nếu câu hỏi đầu tiên mà bạn đặt ra đó là "Vì sao tôi phải tin vào những người tạo ra trang này?", thì đó là một câu hỏi tốt. Hi vọng rằng những thông tin sau đây sẽ làm giảm bớt sự lo ngại từ phía bạn.

*   Chúng tôi đã bất đầu đưa trang của chúng tôi ra thị trường vào tháng 8 năm 2015\. Nếu bạn tìm kiếm trên nguồn ["myetherwallet" tại reddit](https://www.reddit.com/search?q=myetherwallet), bạn sẽ thấy được lượng người hiện tại đang sử dụng và sự thành công của trang myetherwallet.
*   Chúng tôi không dùng trang này nhằm mục đích sử dụng tiền của bạn hoặc đánh cắp các Private key của bạn. Và trên trang của chúng tôi hoàn toàn không xuất hiện mã độc. Trong thực tế tại trang "Tạo Ví" là hoàn toàn được thực hiện từ người sử dụng. Việc này có nghĩa tất cả các đoạn mã và mật khẩu sẽ được thực hiện hoàn toàn trên **Máy tính cá nhân của bạn** và nó hoàn toàn không lưu lại hoặc chuyển đi bất cứ một dữ liệu nào ra khỏi máy tính của bạn.
*   Hãy kiễm tra URL -- Trang của chúng tôi được cung cấp thông qua Github và bạn có thể kiễm tra lại toàn bộ mã nguồn ở đây: [https://github.com/kvhnuke/etherwallet/tree/gh-pages](https://github.com/kvhnuke/etherwallet/tree/gh-pages) đến các tên miền: [https://www.myetherwallet.com](https://www.myetherwallet.com).
*   Đối với việc khởi tạo Ví, bạn có thể tải về [Mã nguồn](https://github.com/kvhnuke/etherwallet/releases/latest). Xem phần #5 phía trên.
*   Bạn hãy cho chạy thử đễ kiễm tra lại toàn bộ hoạt động của nó. Cách đơn giản nhất đễ bạn kiễm tra là nhấn chuột phải vào trang của chúng tôi vào chọn mục "inspect element". đi đến mục "Network". Khởi tạo thử một Ví. Lúc này bạn sẽ thấy được các hoạt động của hệ thống sẽ diễn ra như thế nào. Bạn sẽ thấy được dữ liệu sau: image/gif và image/png. Nó chính là mã QR đã được khởi tạo...trên máy tính của bạn. Và không có một dung lượng dữ liệu nào được chuyển ra khỏi máy của bạn.
*   Nếu bạn cảm thấy không an tâm khi sử dụng công cụ của chúng tôi, bạn có quyền không sử dụng nó. Chúng tôi tạo ra ứng dụng này nhằm giúp người sử dụng dễ dàng tạo Ví mới và lập giao dịch mà không cần dùng đến những câu lệnh trên Terminal hoặc tải về đầy đủ các node. Một lần nữa xin nhắc lại, bạn hoàn toàn có thể ngưng sử dụng và báo lại với chúng tôi nếu bạn có một mối quan ngại nào đó, chúng tôi sẽ chịu trách nhiệm chỉnh sửa hoặc giải đáp thắc mắc từ nơi bạn một cách sớm nhất có thể. Xin Chân Thành Cảm Ơn!
