---
sidebar_position: 2
---

# Content Security Policy (CSP)

**Content Security Policy** (CSP) là một lớp bảo mật bổ sung giúp phát hiện và giảm thiểu một số loại tấn công, bao gồm Cross-Site Scripting ([XSS](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting)), [Clickjacking](https://developer.mozilla.org/en-US/docs/Glossary/Clickjacking) và [data injection attacks](https://quantrimang.com/tan-cong-kieu-sql-injection-va-cac-phong-chong-trong-asp-net-34905). Các cuộc tấn công này được sử dụng cho mọi thứ, từ đánh cắp dữ liệu, làm mất mặt trang web, đến phân phối phần mềm độc hại.

CSP được thiết kế để hoàn toàn tương thích ngược (ngoại trừ CSP phiên bản 2 trong đó có một số mâu thuẫn được đề cập rõ ràng về khả năng tương thích ngược; thêm chi tiết tại [đây](https://www.w3.org/TR/CSP2) phần 1.1). Các trình duyệt không hỗ trợ CSP vẫn hoạt động với các máy chủ triển khai nó và ngược lại: các trình duyệt không hỗ trợ CSP thì sẽ bỏ qua, hoạt động như bình thường, mặc định tuân theo  chuẩn **same-origin policy** cho nội dung web. Nếu trang web không cung cấp CSP header, thì các trình duyệt cũng sử dụng chuẩn [same-origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy).

Để thiết lâp CSP, bạn cần cấu hình cho server của bạn trả về `Content-Security-Policy` HTTP header. Đôi khi bạn có thể thấy đề cập đến `X-Content-Security-Policy` header, nhưng đó là phiên bản cũ hơn và bạn không cần chỉ định nó nữa.

Ngoài ra, phần tử `<meta>` có thể được sử dụng để cấu hình một chính sách, ví dụ:

```
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self'; img-src https://*; child-src 'none';">
```

## Các mối đe dọa

### Giảm thiểu cross-site scripting

### Giảm thiểu packet sniffing attacks

## Cách sử dụng

### Chỉ định chính sách của bạn

Bạn có thể sử dụng `Content-Security-Policy` HTTP header để chỉ định chính sách của mình, như sau:

```
Content-Security-Policy: chính sách
```

**Chính sách** là một chuỗi chứa các chỉ thị chính sách mô tả Chính sách bảo mật nội dung của bạn.

### Viết một chính sách

## Ví dụ: Những trường hợp sử dụng phổ biến

Phần này cung cấp các ví dụ về một số tình huống chính sách bảo mật phổ biến.

### Ví dụ 1:

Quản trị viên trang web muốn tất cả nội dung đến từ nguồn gốc của chính trang web (điều này không bao gồm tên miền phụ.)

```
Content-Security-Policy: default-src 'self'
```

### Ví dụ 2:

Quản trị viên trang web muốn cho phép nội dung từ một miền đáng tin cậy và tất cả các miền phụ của nó (nó không nhất thiết phải là cùng một miền mà CSP được đặt.)

```
Content-Security-Policy: default-src 'self' trusted.com *.trusted.com
```

### Ví dụ 3:

Quản trị viên trang web muốn cho phép người dùng ứng dụng web bao gồm hình ảnh từ bất kỳ nguồn gốc nào trong nội dung của riêng họ, nhưng để hạn chế phương tiện âm thanh hoặc video đối với các nhà cung cấp đáng tin cậy và tất cả các tập lệnh chỉ dành cho một máy chủ cụ thể lưu trữ mã đáng tin cậy.

```
Content-Security-Policy: default-src 'self'; img-src *; media-src media1.com media2.com; script-src userscripts.example.com
```