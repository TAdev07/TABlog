---
sidebar_position: 6
---

# N + 1 Problem

## N + 1 query là gì ?
Câu chuyện xảy ra khi chúng ta, những coder viết code chưa khéo, sinh ra nhiều truy vấn vào cơ sở dữ liệu làm giảm performance của hệ thống. Khi đồng nghiệp đọc code thường thì sẽ bình luận ngay: fix N + 1

Nếu để trót lọt, sau một thời gian vận hành mà chương trình chậm, điều tra ra nguyên nhân rồi lại câu nói kinh điển:

✌️ Đứa nào code ra cái đống shit này đây ✌️

## Ví dụ về N + 1
Mình viết ví dụ tựa như mã giả thui nhé, không đặt nặng vấn đề cú pháp:

Giả sử ta có một cơ sở dữ liệu, trong đó table post có khóa ngoại user_id, nói theo kiểu mã giả là một post thuộc về một user

Thực hiện truy vấn vào cơ sở dữ liệu và lấy tất cả User kèm theo các Post của User đó:

```
User.all.each do |user|
  user.posts
end
```

Các câu lệnh SQL sinh ra như sau

```
  User Load (0.2ms)  SELECT "users".* FROM "users"

  Post Load (0.1ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" = ?  [["user_id", 1]]
  Post Load (0.1ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" = ?  [["user_id", 2]]
  Post Load (0.1ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" = ?  [["user_id", 3]]
```

Lấy máy tính CASIO FX-500 MS ra để đếm thì thấy mình cần dùng 4 câu truy vấn:

Một truy vấn để lấy ra tất cả users => đây chính là 1 trong "N+1"
Ba truy vấn để lấy ra các post tương ứng với ba user trong cơ sở dữ liệu => đây chính là N trong "N+1"
Đối với những hệ thống có số lượng bản ghi lớn (cỡ như phải trả về 1000 user thì chúng ta phải thực hiện 1001 truy vấn) hoặc có database với độ trễ cao (thời gian thực thi truy vấn cao) thì ắt hẳn sẽ làm giảm performance của hệ thống.

Vậy làm sao để có thể lấy ra dữ liệu tương đương như vậy nhưng với số lượng truy vấn bé hơn ?

## Cách khắc phục
### Sử dụng select in ()
**Tối ưu** câu lệnh SQL ngay và luôn.

```
User Load (0.2ms)  SELECT "users".* FROM "users"
Post Load (0.4ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" IN (1, 2, 3)
```

Hehe, nhìn có vẻ đơn giản nhỉ 😄

Chúng ta cần 2 truy vấn:

Truy vấn đầu tiên để load toàn bộ user
Truy vấn thứ 2 để load các post tương ứng với những users đó.
Vậy là okie dồi nà 😄

### Sử dụng joins
Luyên thuyên về joins một lát để hiểu tại sao dùng joins lại giảm được số query.

#### Joins là gì ?
Khái niệm joins bảng trong SQL hoặc là hiểu thấu tận tâm can, hoặc là có biết nhưng chưa hiểu lắm, hoặc nói toẹt luôn là không hiểu vì trông nó loằng ngoằng vãi cả chưởng, chưa kể lại còn chia ra mấy loại.

Mệnh đề joins trong SQL được sử dụng để kết hợp các bản ghi từ hai hoặc nhiều bảng trong một cơ sở dữ liệu bằng cách sử dụng các giá trị chung của mỗi bảng.

Ta có một ví dụ như này:

Bảng User:

| id  | name     | address | email               |
| --- | -------- | ------- | ------------------- |
| 1   | Hoa Vinh | Ha Noi  | hoavinh@gmaill.com  |
| 2   | Mão Mèo  | Ha Noi  | maomeokta@gmail.com |

Bảng Post:

| id  | user_id | title      | content                      |
| --- | ------- | ---------- | ---------------------------- |
| 1   | 1       | Cô gái M52 | Nhà em có bán rượu không     |
| 2   | 2       | Kém Duyên  | Mà sao anh say vì em mất rồi |

Trong ví dụ trên bạn có thể dùng joins để tạo ra bảng mới chứa tên, email của user và những tên bài đăng mà user đó tạo ra.

```
SELECT User.name, User.email, Post.title
      FROM User
      INNER JOIN Post ON User.id = Post.user_id
```

Và kết quả là:

| name     | email               | titlle     |
| -------- | ------------------- | ---------- |
| Hoa Vinh | hoavinh@gmaill.com  | Cô gái M52 |
| Mão Mèo  | maomeokta@gmail.com | Kém Duyên  |

Như vậy, joins sẽ tem tém hai bảng lại rồi truy vấn trên kết quả đó nên joins chỉ tốn một query duy nhất đã cho ra kết quả.

#### Các loại joins
Khi sử dụng joins thì chắc chắn bạn đang dùng một trong các loại sau nên ta sẽ tìm hiểu luôn:

Inner join: Trả về tất cả bản ghi được so khớp đúng.

VD: Chỉ liệt kê những sinh viên nào có điểm toán lớn hơn 9

Left (outer) join: Trả về tất cả bản ghi từ bảng bên trái và các giá trị được so khớp từ bảng bên phải hoặc NULL khi không có so khớp nào.

VD: Liệt kê tất cả sinh viên, nếu sinh viên nào có điểm toán lớn hơn 9 điểm thì in ra.

Right (outer) join: Trả về tất cả bản ghi từ bảng bên phải và các giá trị được so khớp từ bảng bên trái hoặc NULL khi không có so khớp nào.

VD: Liệt kê tất cả điểm môn toán, nếu điểm toán lớn hơn 9 điểm thì in tên sinh viên ra.

Full (outer) join: Trả về tất cả bản ghi từ hai bảng.

VD: Liệt kê tất cả sinh viên kèm theo điểm thi môn toán.

![join](/img/tutorial/diagram-join.webp)

### Lựa chọn cái nào
Hãy so sánh truy vấn do joinsvà select in() tạo ra, bạn sẽ nhận thấy ngay select in() đơn giản, dễ hiểu và ngắn gọn hơn joins rất nhiều.

Trong trường hợp hai bảng cần joins có số lượng record lớn thì select in() sẽ vượt trội hơn hẳn.

Thế tại sao còn sinh ra joins trong khi select in() đã ngon, bổ, rẻ.

Vậy thì hãy xem 3 ví dụ sau:

Không có điều kiện where

```
# Mọi thứ bình yên vô sự
2.3.1 :092 > User.all.includes(:posts)
  User Load (0.2ms)  SELECT "users".* FROM "users"
  Post Load (0.4ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" IN (1, 2, 3)
```

Có thêm điều kiện where trong bảng bên trái (Tức là bảng User)

```
# Mọi thứ vẫn bình yên vô sự
2.3.1 :097 > User.all.includes(:posts).where("users.name = ?" , "Gate")
  User Load (0.5ms)  SELECT "users".* FROM "users" WHERE (users.name = 'Gate')
  Post Load (0.4ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" IN (2, 5, 8)
```

Có thêm điều kiện where trong bảng bên phải (Tức là bảng Post)

```
# Lỗi rồi, ahihi
2.3.1 :099 > User.all.includes(:posts).where("posts.title  = ?" , "Hoa")
  User Load (0.6ms)  SELECT "users".* FROM "users" WHERE (posts.title  = 'Hoa')
ActiveRecord::StatementInvalid: SQLite3::SQLException: no such column: posts.title: SELECT "users".* FROM "users" WHERE (posts.title  = 'Hoa')
```

:::note
Lý do lỗi ở đây là gì ? Tại sao where với bảng bên trái thì không gặp lỗi mà bảng bên phải lại gặp lỗi `no such column`
:::

-> Bởi vì select in() sẽ không load trước được dữ liệu từ bảng post, nên nó không hiểu trường title là gì.

-> Còn trường name nằm ngay trong table user rồi nên không gặp lỗi.

Khi where với bảng bên phải thì đây là đất để joins dụng võ rồi, vì hai bảng được kết hợp với nhau nên luôn có đầy đủ thông tin các trường của mỗi bảng.

```
# Query succeeded rồi, ahihi.
User.all.includes(:posts).references(:posts).where("posts.title  = ?" , "Hoa")
  SQL (0.6ms)  SELECT "users"."id" AS t0_r0, "users"."name" AS t0_r1, "users"."created_at" AS t0_r2, "users"."updated_at" AS t0_r3, "users"."post_id" AS t0_r4, "posts"."id" AS t1_r0, "posts"."title" AS t1_r1, "posts"."created_at" AS t1_r2, "posts"."updated_at" AS t1_r3, "posts"."user_id" AS t1_r4 FROM "users" LEFT OUTER JOIN "posts" ON "posts"."user_id" = "users"."id" WHERE (posts.title  = 'Hoa')
```

Các bạn đừng quá quan tâm includes và references là gì, cứ hiểu mình dùng nó để ép kiểu truy vấn thành select in() hoặc joins là được. Phần sau mình sẽ giải thích kĩ hơn.

:::note
Vậy trong trường hợp có điều kiện where ở bảng bên phải thì phải sài joins nhé, còn ngược lại thì cứ sài select in() cho ngon, bổ, rẻ.
:::

## N +1 trong Rails
Sử dụng cách nào để khử N + 1 query thì mỗi framework sẽ có cách khái quát và trình bày riêng, nhưng bản chất thì vẫn là xoay quanh sử dụng select in() hay joins.

Đã là framework thì đâu có chuyện gõ truy vấn như select from ..., trừ những truy vấn phức tạp quá mới cần tạo select ... thuần rồi exec command.

Phần này, ta sẽ tìm hiểu giới thiệu với Rails framework, trong Rails có 3 cách khử N + 1 như sau:

preload:

```
# Auto sài select in()
2.3.1 :110 >   User.preload(:posts)
  User Load (0.3ms)  SELECT "users".* FROM "users"
  Post Load (1.0ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" IN (1, 2, 3, 4, 5, 6, 7, 8, 9)
```

Eagerload

```
# Auto sài joins
2.3.1 :111 > User.eager_load(:posts)
  SQL (0.7ms)  SELECT "users"."id" AS t0_r0, "users"."name" AS t0_r1, "users"."created_at" AS t0_r2, "users"."updated_at" AS t0_r3, "users"."post_id" AS t0_r4, "posts"."id" AS t1_r0, "posts"."title" AS t1_r1, "posts"."created_at" AS t1_r2, "posts"."updated_at" AS t1_r3, "posts"."user_id" AS t1_r4 FROM "users" LEFT OUTER JOIN "posts" ON "posts"."user_id" = "users"."id"
 => #<ActiveRecord::Relation [#<User id: 1, name: "David", created_at: "2018-04-24 11:42:42", updated_at: "2018-04-24 11:42:42", post_id: 1>, #<User id: 2, name: "Gate", created_at: "2018-04-24 11:42:42", updated_at: "2018-04-24 11:42:42", post_id: 2>, #<User id: 3, name: "Jack", created_at: "2018-04-24 11:42:42", updated_at: "2018-04-24 11:42:42", post_id: 2>, #<User id: 4, name: "David", created_at: "2018-04-24 12:44:37", updated_at: "2018-04-24 12:44:37", post_id: 1>, #<User id: 5, name: "Gate", created_at: "2018-04-24 12:44:37", updated_at: "2018-04-24 12:44:37", post_id: 2>, #<User id: 6, name: "Jack", created_at: "2018-04-24 12:44:37", updated_at: "2018-04-24 12:44:37", post_id: 2>, #<User id: 7, name: "David", created_at: "2018-04-24 12:44:39", updated_at: "2018-04-24 12:44:39", post_id: 1>, #<User id: 8, name: "Gate", created_at: "2018-04-24 12:44:39", updated_at: "2018-04-24 12:44:39", post_id: 2>, #<User id: 9, name: "Jack", created_at: "2018-04-24 12:44:39", updated_at: "2018-04-24 12:44:39", post_id: 2>]>
```

Inludes

```
# Thanh niên này khôn biết

# Mặc định thì thanh niên này dùng select in()
2.3.1 :112 > User.includes(:posts)
  User Load (0.3ms)  SELECT "users".* FROM "users"
  Post Load (0.4ms)  SELECT "posts".* FROM "posts" WHERE "posts"."user_id" IN (1, 2, 3, 4, 5, 6, 7, 8, 9)


# Nhưng khi cần thiết thì thêm references vào để chuyển sang joins, ghê chưa v:
2.3.1 :113 > User.includes(:posts).references(:posts)
  SQL (0.7ms)  SELECT "users"."id" AS t0_r0, "users"."name" AS t0_r1, "users"."created_at" AS t0_r2, "users"."updated_at" AS t0_r3, "users"."post_id" AS t0_r4, "posts"."id" AS t1_r0, "posts"."title" AS t1_r1, "posts"."created_at" AS t1_r2, "posts"."updated_at" AS t1_r3, "posts"."user_id" AS t1_r4 FROM "users" LEFT OUTER JOIN "posts" ON "posts"."user_id" = "users"."id"
 => #<ActiveRecord::Relation [#<User id: 1, name: "David", created_at: "2018-04-24 11:42:42", updated_at: "2018-04-24 11:42:42", post_id: 1>, #<User id: 2, name: "Gate", created_at: "2018-04-24 11:42:42", updated_at: "2018-04-24 11:42:42", post_id: 2>, #<User id: 3, name: "Jack", created_at: "2018-04-24 11:42:42", updated_at: "2018-04-24 11:42:42", post_id: 2>, #<User id: 4, name: "David", created_at: "2018-04-24 12:44:37", updated_at: "2018-04-24 12:44:37", post_id: 1>, #<User id: 5, name: "Gate", created_at: "2018-04-24 12:44:37", updated_at: "2018-04-24 12:44:37", post_id: 2>, #<User id: 6, name: "Jack", created_at: "2018-04-24 12:44:37", updated_at: "2018-04-24 12:44:37", post_id: 2>, #<User id: 7, name: "David", created_at: "2018-04-24 12:44:39", updated_at: "2018-04-24 12:44:39", post_id: 1>, #<User id: 8, name: "Gate", created_at: "2018-04-24 12:44:39", updated_at: "2018-04-24 12:44:39", post_id: 2>, #<User id: 9, name: "Jack", created_at: "2018-04-24 12:44:39", updated_at: "2018-04-24 12:44:39", post_id: 2>]>
```

Đó, vậy là tùy từng trường hợp cụ thể, ta sẽ dùng một trong ba cách trên.

Thế trong trường hợp có 3 bảng thì sao, cú pháp nó thế nào ?

```
2.3.1 :024 > User.includes(posts: :comments).references(:posts).where("comments.content = ?", "A")
  SQL (0.8ms)  SELECT "users"."id" AS t0_r0, "users"."name" AS t0_r1, "users"."created_at" AS t0_r2, "users"."updated_at" AS t0_r3, "users"."post_id" AS t0_r4, "posts"."id" AS t1_r0, "posts"."title" AS t1_r1, "posts"."created_at" AS t1_r2, "posts"."updated_at" AS t1_r3, "posts"."user_id" AS t1_r4, "posts"."comment_id" AS t1_r5, "comments"."id" AS t2_r0, "comments"."content" AS t2_r1, "comments"."created_at" AS t2_r2, "comments"."updated_at" AS t2_r3, "comments"."post_id" AS t2_r4 FROM "users" LEFT OUTER JOIN "posts" ON "posts"."user_id" = "users"."id" LEFT OUTER JOIN "comments" ON "comments"."post_id" = "posts"."id" WHERE (comments.content = 'A')
```

Cú pháp cũ hơn:

```
2.3.1 :026 > User.includes(:posts => [:comments]).references(:posts).where("comments.content = ?", "A")
```

## Tính năng hay bug

- Từ đầu tới giờ ta tìm hiểu thì có vẻ như N + 1 là điều không tốt cho performance của chương trình.
Nhưng chưa hẳn, hãy xem xét ví dụ sau:

Bạn truy cập vào trang chủ của website bán hàng, có tính năng phân trang nên chỉ load ra 20 sản phẩm đầu tiên (có kèm theo nơi sản xuất ở Hà Nội)

Dễ thấy rằng ở đây dễ xuất hiện N + 1 query:

1 truy vấn đầu tiên để lấy ra 20 sản phẩm từ bảng Product.

20 truy vấn tiếp theo lấy ra nơi sản xuất của 20 sản phẩm đó tư bảng Company.

Có thêm điều kiện where("company.product.id = ?", "Hà Nội") ở bảng bên phải

Vậy chúng ta cần 20 + 1 = 21 truy vấn và chúng ta sử dụng joins để khử N + 1.

Trong trường hợp đối với một cơ sở dữ liệu khủng, với hàng triệu record cho mỗi bảng thì việc joins hai bảng khủng như vậy sẽ tiêu tốn tài nguyên hơn 21 câu truy vấn ngắn rất nhiều lần.

Bản chất của joins là sẽ duyệt qua từng bản ghi của bảng thứ nhất, đối chiếu với từng bản ghi của bảng thứ 2, nếu điều kiện được thỏa mãn thì kết hợp thành một hàng, duyệt 2 vòng lặp, tiêu tốn nhiều thời gian và tài nguyên.

Hoặc một trường hợp đơn giản hơn, khi sử dụng html cache thì sao ?

:::info
Như vậy, không phải lúc nào gặp N + 1 cũng sẽ khử, nó còn phụ thuộc vào từng trường hợp cụ thể, khử được theo select in() thì thì khử nó không thương tiếc, còn phải khử theo joins thì nên chú ý tới độ lớn của bảng.
:::