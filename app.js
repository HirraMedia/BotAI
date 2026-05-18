const messages = document.getElementById("messages");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

const knowledge = [
  // ==========================================
  // PHẦN 1: KHÁI NIỆM CƠ BẢN VỀ CƠ SỞ DỮ LIỆU
  // ==========================================
  {
    keywords: ["sql là gì", "sql la gi", "sql"],
    answer: `SQL (Structured Query Language) là ngôn ngữ truy vấn có cấu trúc, dùng để giao tiếp và làm việc với cơ sở dữ liệu.

SQL giúp bạn thực hiện các công việc cốt lõi như:
- Truy xuất và tìm kiếm dữ liệu (SELECT)
- Thêm mới dữ liệu (INSERT)
- Cập nhật, sửa đổi dữ liệu (UPDATE)
- Xóa bỏ dữ liệu (DELETE)
- Tạo bảng, phân quyền và quản lý toàn bộ hệ thống dữ liệu.`
  },
  {
    keywords: ["sql server là gì", "sql server la gi", "sql server"],
    answer: `SQL Server là một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) do tập đoàn Microsoft phát triển.

Nó đóng vai trò như một "nhà kho" thông minh, dùng để lưu trữ, quản lý, bảo mật và truy xuất dữ liệu một cách an toàn cho các ứng dụng, website hoặc phần mềm doanh nghiệp.`
  },
  {
    keywords: ["create database", "tạo cơ sở dữ liệu", "tao co so du lieu", "tạo db"],
    answer: `CREATE DATABASE dùng để tạo một cơ sở dữ liệu (Database) hoàn toàn mới trên hệ thống.

Cơ sở dữ liệu giống như một "ngôi nhà" lớn, bên trong sẽ chứa nhiều "căn phòng" chính là các bảng (Table) dữ liệu.

Ví dụ:
CREATE DATABASE QuanLySinhVien;

Lưu ý: Sau khi tạo xong, bạn cần dùng lệnh "USE QuanLySinhVien;" để báo cho hệ thống biết bạn sẽ bắt đầu làm việc bên trong cơ sở dữ liệu này.`
  },

  // ==========================================
  // PHẦN 2: THAO TÁC VỚI BẢNG (TABLE)
  // ==========================================
  {
    keywords: ["create table", "create table là gì", "tạo bảng", "tao bang"],
    answer: `CREATE TABLE dùng để tạo một bảng mới để lưu trữ dữ liệu.

Khi tạo bảng, bạn phải đặt tên bảng, định nghĩa các cột chứa thông tin gì, và quy định kiểu dữ liệu cho từng cột (chữ, số, ngày tháng...).

Ví dụ:
CREATE TABLE NhanVien (
    MaNV INT PRIMARY KEY,
    HoTen NVARCHAR(50) NOT NULL,
    NgaySinh DATE,
    Luong DECIMAL(18, 2)
);`
  },
  {
    keywords: ["alter table", "alter table là gì", "sửa bảng", "sua bang"],
    answer: `ALTER TABLE dùng để can thiệp và thay đổi cấu trúc của một bảng đã có sẵn mà không làm mất bảng đó.

Bạn có thể dùng nó để:
1. Thêm cột: ALTER TABLE SinhVien ADD Email NVARCHAR(100);
2. Xóa cột: ALTER TABLE SinhVien DROP COLUMN Email;
3. Sửa kiểu dữ liệu: ALTER TABLE SinhVien ALTER COLUMN Diem FLOAT;`
  },
  {
    keywords: ["drop table", "drop table là gì", "xóa bảng", "xoa bang"],
    answer: `DROP TABLE dùng để xóa sổ hoàn toàn một bảng khỏi cơ sở dữ liệu.

CẢNH BÁO: Lệnh này cực kỳ nguy hiểm. Nó không chỉ xóa toàn bộ dữ liệu bên trong mà còn đập bỏ luôn cấu trúc của bảng. Không thể Undo nếu không có Backup.

Ví dụ: DROP TABLE NhanVien;`
  },

  // ==========================================
  // PHẦN 3: TRUY VẤN VÀ LỌC DỮ LIỆU CƠ BẢN
  // ==========================================
  {
    keywords: ["select là gì", "select la gi", "select"],
    answer: `SELECT dùng để lấy (truy vấn) dữ liệu từ một hoặc nhiều bảng.

Ví dụ:
SELECT * FROM SinhVien;
(Dấu * có nghĩa là lấy TẤT CẢ các cột trong bảng SinhVien).

Nếu chỉ muốn lấy một số cột nhất định:
SELECT MaSV, HoTen FROM SinhVien;`
  },
  {
    keywords: ["from là gì", "from la gi", "from"],
    answer: `FROM dùng để chỉ định nguồn dữ liệu (tên bảng) mà bạn muốn lấy thông tin. Nó luôn đi kèm sát ngay sau lệnh SELECT.

Ví dụ:
SELECT HoTen FROM SinhVien;
(Lấy cột HoTen từ bảng tên là SinhVien).`
  },
  {
    keywords: ["where là gì", "where la gi", "where"],
    answer: `WHERE dùng để thiết lập điều kiện lọc dữ liệu. Nó giúp bạn chỉ lấy ra những dòng dữ liệu thỏa mãn yêu cầu cụ thể.

Ví dụ:
SELECT * FROM SinhVien
WHERE Diem > 8;

Câu lệnh này sẽ bỏ qua các sinh viên điểm thấp, chỉ xuất ra màn hình những sinh viên có điểm lớn hơn 8.`
  },
  {
    keywords: ["and là gì", "and la gi", "and"],
    answer: `AND (VÀ) dùng khi bạn muốn kết hợp nhiều điều kiện lọc và bắt buộc TẤT CẢ các điều kiện đó đều phải ĐÚNG.

Ví dụ:
SELECT * FROM SinhVien
WHERE Diem > 8 AND MaLop = 'L01';
(Chỉ lấy những sinh viên vừa có điểm > 8, VÀ vừa học lớp L01).`
  },
  {
    keywords: ["or là gì", "or la gi", "or"],
    answer: `OR (HOẶC) dùng khi bạn có nhiều điều kiện lọc nhưng CHỈ CẦN MỘT trong số các điều kiện đó đúng là dữ liệu sẽ được lấy.

Ví dụ:
SELECT * FROM SinhVien
WHERE MaLop = 'L01' OR MaLop = 'L02';
(Lấy tất cả sinh viên, miễn là học lớp L01 HOẶC học lớp L02 đều được).`
  },
  {
    keywords: ["like", "like là gì", "tìm kiếm gần đúng", "tim kiem gan dung"],
    answer: `LIKE dùng để tìm kiếm chuỗi theo một mẫu (pattern) gần đúng, thường kết hợp với dấu phần trăm (%).

- % đại diện cho nhiều ký tự bất kỳ.
- _ đại diện cho 1 ký tự bất kỳ.

Ví dụ:
SELECT * FROM SinhVien WHERE HoTen LIKE N'%An%';
(Tìm tất cả sinh viên mà trong tên có chứa chữ "An" như An, Bình An, An Nguyễn...).`
  },
  {
    keywords: ["between", "between là gì"],
    answer: `BETWEEN dùng để lọc dữ liệu nằm trong một khoảng nhất định (bao gồm cả giá trị bắt đầu và kết thúc).

Ví dụ:
SELECT * FROM SinhVien WHERE Diem BETWEEN 5 AND 8;
(Lấy những sinh viên có điểm từ 5 đến 8).`
  },
  {
    keywords: ["in là gì", "in la gi", "in"],
    answer: `IN dùng để kiểm tra xem một giá trị có nằm trong một danh sách cụ thể hay không. Nó giúp viết code ngắn gọn hơn thay vì dùng nhiều lệnh OR.

Ví dụ:
SELECT * FROM SinhVien WHERE MaLop IN ('L01', 'L02', 'L03');
(Lấy các sinh viên thuộc 1 trong 3 lớp trên).`
  },
  {
    keywords: ["null", "is null", "is null là gì"],
    answer: `IS NULL dùng để tìm các dòng dữ liệu đang bị bỏ trống (chưa được nhập giá trị nào).
Lưu ý: Không thể dùng dấu bằng (= NULL) mà bắt buộc phải dùng IS NULL.

Ví dụ:
SELECT * FROM SinhVien WHERE Email IS NULL;
(Lấy ra những sinh viên chưa cập nhật địa chỉ Email).`
  },
  {
    keywords: ["distinct", "distinct là gì"],
    answer: `DISTINCT dùng để loại bỏ các dữ liệu bị trùng lặp trong kết quả trả về, chỉ giữ lại các giá trị duy nhất.

Ví dụ:
SELECT DISTINCT QuocGia FROM KhachHang;
(Nếu có 100 khách hàng ở Việt Nam, chữ "Việt Nam" chỉ xuất hiện 1 lần trong kết quả).`
  },
  {
    keywords: ["top", "limit", "giới hạn kết quả", "lay n dong"],
    answer: `TOP (trong SQL Server) hoặc LIMIT (trong MySQL) dùng để giới hạn số lượng dòng dữ liệu được in ra màn hình.

Ví dụ (Lấy 3 sinh viên giỏi nhất):
SELECT TOP 3 * FROM SinhVien
ORDER BY Diem DESC;`
  },

  // ==========================================
  // PHẦN 4: THÊM, SỬA, XÓA DỮ LIỆU
  // ==========================================
  {
    keywords: ["insert", "insert là gì", "thêm dữ liệu", "them du lieu"],
    answer: `INSERT INTO dùng để thêm một hoặc nhiều dòng dữ liệu mới vào bảng.

Ví dụ:
INSERT INTO SinhVien (MaSV, HoTen, Diem)
VALUES ('SV01', N'Nguyễn Văn A', 8.5);`
  },
  {
    keywords: ["update", "update là gì", "sửa dữ liệu", "sua du lieu"],
    answer: `UPDATE dùng để sửa đổi, cập nhật lại dữ liệu đã tồn tại trong bảng.

LƯU Ý CỰC KỲ QUAN TRỌNG: Luôn luôn phải dùng kèm mệnh đề WHERE để chỉ định dòng cần sửa. Nếu quên WHERE, toàn bộ bảng sẽ bị cập nhật đổi theo.

Ví dụ:
UPDATE SinhVien
SET Diem = 9
WHERE MaSV = 'SV01';`
  },
  {
    keywords: ["delete", "delete là gì", "xóa dữ liệu", "xoa du lieu"],
    answer: `DELETE dùng để xóa một hoặc nhiều dòng dữ liệu khỏi bảng.

LƯU Ý: Giống như UPDATE, lệnh DELETE cũng bắt buộc phải đi kèm WHERE để tránh xóa nhầm toàn bộ dữ liệu.

Ví dụ:
DELETE FROM SinhVien WHERE Diem < 4;`
  },
  {
    keywords: ["truncate", "truncate là gì", "xóa sạch dữ liệu", "truncate và delete"],
    answer: `TRUNCATE TABLE dùng để dọn sạch TẤT CẢ dữ liệu trong bảng ngay lập tức, nhưng VẪN GIỮ LẠI vỏ (cấu trúc) của bảng.

Sự khác biệt với DELETE:
- TRUNCATE tốc độ cực kỳ nhanh, reset lại các cột ID tự tăng về 0, không thể dùng lệnh WHERE lọc điều kiện.
- DELETE xóa từng dòng, chậm hơn nhưng an toàn hơn vì cho phép dùng WHERE.

Ví dụ: TRUNCATE TABLE LichSuGiaoDich;`
  },

  // ==========================================
  // PHẦN 5: SẮP XẾP, GOM NHÓM & HÀM THỐNG KÊ
  // ==========================================
  {
    keywords: ["order by", "order by là gì", "sắp xếp", "sap xep"],
    answer: `ORDER BY dùng để sắp xếp kết quả trả về theo một cột nào đó.

Có 2 kiểu sắp xếp:
- ASC (Ascending): Tăng dần (từ A-Z, từ 0-9). Mặc định nếu không ghi gì thì SQL sẽ dùng ASC.
- DESC (Descending): Giảm dần (từ Z-A, từ 9-0).

Ví dụ:
SELECT * FROM SinhVien ORDER BY Diem DESC;`
  },
  {
    keywords: ["group by", "group by là gì", "nhóm dữ liệu", "nhom du lieu"],
    answer: `GROUP BY dùng để gom nhóm các dòng dữ liệu có cùng giá trị lại với nhau. Thường đi kèm với các hàm thống kê (COUNT, SUM, AVG) để tính toán trên từng nhóm.

Ví dụ: Đếm xem mỗi lớp có bao nhiêu sinh viên:
SELECT MaLop, COUNT(*) AS SoSinhVien
FROM SinhVien
GROUP BY MaLop;`
  },
  {
    keywords: ["having", "having là gì"],
    answer: `HAVING dùng để thiết lập điều kiện lọc dữ liệu SAU KHI đã gom nhóm bằng GROUP BY.

Ví dụ: Chỉ lấy những lớp có SỐ LƯỢNG sinh viên lớn hơn 30:
SELECT MaLop, COUNT(*) AS SoLuong
FROM SinhVien
GROUP BY MaLop
HAVING COUNT(*) > 30;`
  },
  {
    keywords: ["where và having", "where having khác nhau", "where va having"],
    answer: `Sự khác biệt cốt lõi giữa WHERE và HAVING:

1. WHERE: 
- Lọc dữ liệu TRƯỚC KHI gom nhóm (GROUP BY).
- Không thể dùng chung với các hàm thống kê (như SUM, COUNT...).

2. HAVING: 
- Lọc dữ liệu SAU KHI đã gom nhóm.
- Chuyên dùng để làm việc với kết quả của các hàm thống kê (SUM, COUNT...).`
  },
  {
    keywords: ["count", "count là gì", "đếm", "dem"],
    answer: `COUNT dùng để đếm số lượng dòng dữ liệu trả về.

Ví dụ: Đếm tổng số sinh viên trong trường:
SELECT COUNT(*) FROM SinhVien;`
  },
  {
    keywords: ["sum", "sum là gì", "tính tổng", "tinh tong"],
    answer: `SUM dùng để tính tổng các giá trị trong một cột kiểu số.

Ví dụ: Tính tổng tiền lương phải trả cho nhân viên:
SELECT SUM(Luong) FROM NhanVien;`
  },
  {
    keywords: ["avg", "avg là gì", "trung bình", "trung binh"],
    answer: `AVG (Average) dùng để tính giá trị trung bình cộng của một cột.

Ví dụ: Tính điểm trung bình của toàn trường:
SELECT AVG(Diem) FROM SinhVien;`
  },
  {
    keywords: ["max", "max là gì", "lớn nhất", "lon nhat", "min", "nhỏ nhất"],
    answer: `MAX và MIN dùng để tìm giá trị lớn nhất và nhỏ nhất trong một cột.

Ví dụ tìm người có lương cao nhất và thấp nhất:
SELECT MAX(Luong) AS LuongCaoNhat, MIN(Luong) AS LuongThapNhat
FROM NhanVien;`
  },

  // ==========================================
  // PHẦN 6: KẾT NỐI BẢNG (JOIN)
  // ==========================================
  {
    keywords: ["join là gì", "join la gi", "join"],
    answer: `JOIN dùng để kết hợp, chắp vá dữ liệu từ 2 hay nhiều bảng lại với nhau dựa trên một cột chung (thường là Khóa chính - Khóa ngoại).

Có các loại JOIN phổ biến: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN.

Ví dụ:
SELECT SinhVien.HoTen, Lop.TenLop
FROM SinhVien
JOIN Lop ON SinhVien.MaLop = Lop.MaLop;`
  },
  {
    keywords: ["inner join", "inner join là gì", "inner join la gi"],
    answer: `INNER JOIN (hoặc chỉ viết là JOIN) là phép nối phổ biến nhất. 
Nó CHỈ trả về những dòng mà dữ liệu khớp nhau ở CẢ HAI BẢNG.

Ví dụ: Chỉ sinh viên nào được phân lớp, và lớp nào có sinh viên thì mới được hiện ra.`
  },
  {
    keywords: ["left join", "left join là gì", "left join la gi"],
    answer: `LEFT JOIN ưu tiên bảng bên TRÁI (bảng viết ngay sau chữ FROM).
Nó sẽ lấy TẤT CẢ dữ liệu của bảng bên Trái, nếu bảng bên Phải không có dữ liệu khớp thì nó sẽ điền chữ NULL vào ô trống.

Ví dụ: Lấy danh sách tất cả sinh viên (dù sinh viên đó chưa được xếp lớp). Lớp nào chưa có sẽ báo NULL.`
  },
  {
    keywords: ["right join", "right join là gì", "right join la gi"],
    answer: `RIGHT JOIN hoạt động ngược lại với LEFT JOIN. 
Nó ưu tiên lấy toàn bộ dữ liệu ở bảng bên PHẢI (bảng viết sau chữ JOIN), bảng bên Trái không có dữ liệu khớp sẽ bị điền NULL.`
  },
  {
    keywords: ["on là gì", "on la gi", "on trong join"],
    answer: `ON là từ khóa bắt buộc khi dùng JOIN, dùng để chỉ định "cây cầu" liên kết giữa 2 bảng. Nó cho SQL biết 2 bảng này liên quan với nhau qua cột nào.

Ví dụ: 
ON SinhVien.MaLop = Lop.MaLop
(Báo cho SQL biết cột MaLop ở bảng SinhVien và MaLop ở bảng Lop chính là điểm giao nhau).`
  },

  // ==========================================
  // PHẦN 7: RÀNG BUỘC (CONSTRAINTS) & KIỂU DỮ LIỆU
  // ==========================================
  {
    keywords: ["primary key", "khóa chính", "khoa chinh"],
    answer: `PRIMARY KEY (Khóa chính) là một cột (hoặc nhiều cột) dùng để NHẬN DIỆN DUY NHẤT một dòng dữ liệu trong bảng.

Quy tắc của Khóa chính:
1. Không được phép trùng lặp (Giống như Số CCCD của mỗi người).
2. Không được phép để trống (NOT NULL).`
  },
  {
    keywords: ["foreign key", "khóa ngoại", "khoa ngoai"],
    answer: `FOREIGN KEY (Khóa ngoại) là cột dùng để TẠO MỐI LIÊN KẾT giữa 2 bảng.

Giá trị của cột Khóa ngoại ở bảng này thường phải tham chiếu (chỉ) tới cột Khóa chính của bảng khác, giúp đảm bảo tính toàn vẹn của dữ liệu (không thể có sinh viên học ở một mã lớp không tồn tại).`
  },
  {
    keywords: ["unique", "unique là gì", "ràng buộc unique", "duy nhất"],
    answer: `UNIQUE là ràng buộc đảm bảo dữ liệu trong cột không bao giờ bị trùng lặp.

Khác với PRIMARY KEY, một bảng có thể có rất nhiều cột UNIQUE (ví dụ: Số điện thoại không trùng, Email không trùng), và UNIQUE vẫn cho phép nhập giá trị trống (NULL).`
  },
  {
    keywords: ["default", "default là gì", "mặc định", "mac dinh"],
    answer: `DEFAULT dùng để tự động gán một giá trị mặc định cho cột nếu người dùng không nhập gì cả.

Ví dụ: 
TrangThai NVARCHAR(20) DEFAULT N'Đang chờ'
(Nếu tạo đơn hàng mà không ghi trạng thái, hệ thống sẽ tự điền chữ "Đang chờ").`
  },
  {
    keywords: ["check", "check là gì", "ràng buộc check"],
    answer: `CHECK dùng để kiểm tra tính hợp lệ của dữ liệu trước khi cho phép lưu vào bảng.

Ví dụ: 
Tuoi INT CHECK (Tuoi >= 18)
(Nếu bạn cố gắng nhập nhân viên 16 tuổi, hệ thống sẽ báo lỗi và chặn lại).`
  },
  {
    keywords: ["nvarchar", "varchar", "khác biệt nvarchar varchar"],
    answer: `Khác biệt cơ bản:
- VARCHAR: Lưu chuỗi ký tự chuẩn ASCII (Không gõ được tiếng Việt có dấu). Tốn ít dung lượng hơn.
- NVARCHAR: Lưu chuỗi ký tự Unicode (Hỗ trợ tiếng Việt có dấu). Tốn gấp đôi dung lượng so với Varchar.

Nên dùng NVARCHAR cho các cột như: HoTen, DiaChi. Dùng VARCHAR cho: Email, MaSo.`
  },
  {
    keywords: ["int", "date", "kiểu dữ liệu"],
    answer: `- INT (Integer): Dùng để lưu các số nguyên (Không có phần thập phân). Ví dụ: Tuổi, Số lượng hàng tồn kho.
- DATE: Dùng để lưu dữ liệu ngày tháng năm (Không lưu giờ phút giây). Ví dụ: Ngày sinh, Ngày nhập học.`
  },

  // ==========================================
  // PHẦN 8: KIẾN THỨC NÂNG CAO
  // ==========================================
  {
    keywords: ["union", "union là gì", "gộp kết quả", "gop ket qua"],
    answer: `UNION dùng để gộp nối kết quả của 2 hay nhiều câu lệnh SELECT (khác bảng) thành một danh sách kết quả duy nhất.

Quy tắc bắt buộc:
- Các SELECT phải lấy ra cùng số lượng cột.
- Các cột tương ứng phải có cùng kiểu dữ liệu.

Lưu ý: UNION tự động xóa các dòng trùng lặp. Nếu muốn hiển thị tất cả, hãy dùng UNION ALL.`
  },
  {
    keywords: ["subquery", "subquery là gì", "truy vấn con", "truy van long nhau"],
    answer: `Subquery (Truy vấn con) là một câu lệnh SELECT được viết lồng bên trong một lệnh SQL khác. 

Hệ thống sẽ chạy câu truy vấn con trước để lấy kết quả nháp, rồi đưa kết quả đó ra ngoài cho câu truy vấn cha dùng làm điều kiện lọc.

Ví dụ (Lấy sinh viên có điểm lớn hơn trung bình lớp):
SELECT HoTen, Diem FROM SinhVien 
WHERE Diem > (SELECT AVG(Diem) FROM SinhVien);`
  },
  {
    keywords: ["view", "view là gì", "bảng ảo", "bang ao"],
    answer: `VIEW (Bảng ảo) là kết quả của một câu lệnh SQL được lưu lại dưới dạng một bảng. 

Lợi ích:
- Nó không lưu dữ liệu thật, chỉ lưu câu lệnh nên không tốn bộ nhớ.
- Giúp che giấu logic phức tạp (gói gọn 5-6 lệnh JOIN dài ngoằng vào 1 cái tên View).
- Tăng bảo mật (Giấu đi cột Lương, chỉ cho nhân viên xem View có cột Tên và Phòng ban).`
  },
  {
    keywords: ["index", "index là gì", "chỉ mục", "chi muc", "tối ưu sql"],
    answer: `INDEX (Chỉ mục) dùng để tăng tốc độ truy xuất dữ liệu giống như "Mục lục" của một cuốn sách.

Thay vì lật từng trang (Full Scan) để tìm dữ liệu, SQL nhìn vào Index để nhảy thẳng đến dòng cần thiết.
Tuy nhiên, Index làm các lệnh Thêm, Sửa, Xóa bị chậm đi vì phải cập nhật lại mục lục liên tục. Chỉ nên đánh Index ở các cột thường xuyên bị truy vấn (WHERE).`
  },
  {
    keywords: ["stored procedure", "procedure là gì", "thủ tục", "sp"],
    answer: `STORED PROCEDURE (Thủ tục lưu trữ) là một khối chứa nhiều đoạn code SQL đã được biên dịch sẵn và lưu trên máy chủ.

Lợi ích:
- Chạy cực kỳ nhanh vì đã được lưu cache.
- Cho phép truyền tham số đầu vào.
- Bảo mật tốt, chặn được hacker dùng SQL Injection.

Ví dụ gọi thủ tục:
EXEC sp_LayDanhSachSinhVien 'L01';`
  },
  {
    keywords: ["transaction", "transaction là gì", "giao dịch", "commit", "rollback"],
    answer: `TRANSACTION (Giao dịch) đảm bảo một chuỗi các hành động SQL phải thành công TẤT CẢ, hoặc THẤT BẠI TẤT CẢ (All or Nothing).

Ví dụ khi chuyển tiền: Trừ tiền tài khoản A và Cộng tiền tài khoản B phải cùng thành công. Nếu trừ tiền xong mà mất điện, hệ thống lỗi không cộng tiền cho B được, Transaction sẽ kích hoạt lệnh ROLLBACK để hoàn tiền lại cho A.
Nếu thành công mĩ mãn, nó sẽ dùng lệnh COMMIT để lưu vĩnh viễn.`
  },
  {
    keywords: ["case when", "case when là gì", "câu lệnh điều kiện", "if else trong sql"],
    answer: `CASE WHEN là cách SQL viết cấu trúc rẽ nhánh điều kiện (giống IF-ELSE).

Ví dụ xếp loại học lực:
SELECT HoTen, Diem,
CASE 
    WHEN Diem >= 8 THEN N'Giỏi'
    WHEN Diem >= 6.5 THEN N'Khá'
    ELSE N'Trung bình'
END AS XepLoai
FROM SinhVien;`
  },
  {
    keywords: ["as là gì", "as la gi", "as"],
    answer: `AS (Alias) dùng để đặt một cái tên giả (tên ngắn gọn) tạm thời cho một cột hoặc một bảng trong lúc hiển thị kết quả, giúp code dễ nhìn hơn.

Ví dụ:
SELECT HoTen AS N'Họ và Tên Sinh Viên' 
FROM SinhVien AS SV;`
  }
];

function normalize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "")
    .trim();
}

function findAnswer(question) {
  const q = normalize(question);

  let bestMatch = null;
  let bestScore = 0;

  for (const item of knowledge) {
    for (const keyword of item.keywords) {
      const key = normalize(keyword);

      if (q.includes(key) || key.includes(q)) {
        const score = key.length;
        if (score > bestScore) {
          bestScore = score;
          bestMatch = item;
        }
      }
    }
  }

  if (bestMatch) {
    return bestMatch.answer;
  }

  return `Mình chưa tìm thấy câu trả lời phù hợp.

Bạn có thể hỏi theo mẫu:
- WHERE là gì?
- Subquery là gì?
- GROUP BY dùng để làm gì?
- PRIMARY KEY là gì?
- UPDATE khác DELETE thế nào?
- Transaction hoạt động ra sao?`;
}

function addMessage(type, author, text) {
  const div = document.createElement("div");
  div.className = `message ${type}`;

  const formattedText = text.replace(/\n/g, "<br>");
  div.innerHTML = `
    <strong>${author}</strong>
    <p>${formattedText}</p>
  `;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const question = userInput.value.trim();
  if (!question) return;

  addMessage("user", "Bạn", question);
  userInput.value = "";

  setTimeout(() => {
    const answer = findAnswer(question);
    addMessage("bot", "Bot SQL", answer);
  }, 300);
});
