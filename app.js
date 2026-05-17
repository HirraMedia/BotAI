const messages = document.getElementById("messages");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

const knowledge = [
  {
    keywords: ["sql là gì", "sql la gi", "sql"],
    answer: `SQL là ngôn ngữ dùng để làm việc với cơ sở dữ liệu.

SQL giúp:
- Lấy dữ liệu
- Thêm dữ liệu
- Sửa dữ liệu
- Xóa dữ liệu
- Tạo bảng và quản lý dữ liệu`
  },
  {
    keywords: ["sql server là gì", "sql server la gi", "sql server"],
    answer: `SQL Server là hệ quản trị cơ sở dữ liệu của Microsoft.

Nó dùng để lưu trữ, quản lý và truy xuất dữ liệu trong các ứng dụng, website hoặc phần mềm.`
  },
  {
    keywords: ["select là gì", "select la gi", "select"],
    answer: `SELECT dùng để lấy dữ liệu từ bảng.

Ví dụ:
SELECT * FROM SinhVien;

Câu lệnh này lấy tất cả dữ liệu trong bảng SinhVien.`
  },
  {
    keywords: ["from là gì", "from la gi", "from"],
    answer: `FROM dùng để chỉ bảng cần lấy dữ liệu.

Ví dụ:
SELECT HoTen FROM SinhVien;

Câu này lấy cột HoTen từ bảng SinhVien.`
  },
  {
    keywords: ["where là gì", "where la gi", "where"],
    answer: `WHERE dùng để lọc dữ liệu theo điều kiện.

Ví dụ:
SELECT * FROM SinhVien
WHERE Diem > 8;

Câu lệnh này lấy các sinh viên có điểm lớn hơn 8.`
  },
  {
    keywords: ["join là gì", "join la gi", "join"],
    answer: `JOIN dùng để kết hợp dữ liệu từ nhiều bảng có liên quan với nhau.

Ví dụ:
SELECT SinhVien.HoTen, Lop.TenLop
FROM SinhVien
JOIN Lop ON SinhVien.MaLop = Lop.MaLop;

Câu này lấy tên sinh viên kèm tên lớp.`
  },
  {
    keywords: ["inner join", "inner join là gì", "inner join la gi"],
    answer: `INNER JOIN lấy những dòng có dữ liệu khớp ở cả hai bảng.

Nếu một sinh viên không có mã lớp khớp với bảng Lop thì sinh viên đó sẽ không xuất hiện trong kết quả.`
  },
  {
    keywords: ["left join", "left join là gì", "left join la gi"],
    answer: `LEFT JOIN lấy toàn bộ dữ liệu ở bảng bên trái, kể cả khi bảng bên phải không có dữ liệu khớp.

Nếu không khớp, phần dữ liệu bên phải sẽ là NULL.`
  },
  {
    keywords: ["right join", "right join là gì", "right join la gi"],
    answer: `RIGHT JOIN lấy toàn bộ dữ liệu ở bảng bên phải, kể cả khi bảng bên trái không có dữ liệu khớp.`
  },
  {
    keywords: ["on là gì", "on la gi", "on trong join"],
    answer: `ON dùng để chỉ điều kiện liên kết giữa hai bảng khi dùng JOIN.

Ví dụ:
ON SinhVien.MaLop = Lop.MaLop`
  },
  {
    keywords: ["and là gì", "and la gi", "and"],
    answer: `AND dùng khi muốn nhiều điều kiện cùng đúng.

Ví dụ:
SELECT * FROM SinhVien
WHERE Diem > 8 AND MaNhom = 6;`
  },
  {
    keywords: ["or là gì", "or la gi", "or"],
    answer: `OR dùng khi chỉ cần một trong các điều kiện đúng.

Ví dụ:
SELECT * FROM SinhVien
WHERE Diem > 8 OR MaNhom = 6;`
  },
  {
    keywords: ["order by", "order by là gì", "sắp xếp", "sap xep"],
    answer: `ORDER BY dùng để sắp xếp kết quả.

Ví dụ:
SELECT * FROM SinhVien
ORDER BY Diem DESC;

DESC là giảm dần, ASC là tăng dần.`
  },
  {
    keywords: ["group by", "group by là gì", "nhóm dữ liệu", "nhom du lieu"],
    answer: `GROUP BY dùng để nhóm dữ liệu theo một cột.

Ví dụ:
SELECT MaLop, COUNT(*) AS SoSinhVien
FROM SinhVien
GROUP BY MaLop;

Câu này đếm số sinh viên theo từng lớp.`
  },
  {
    keywords: ["having", "having là gì"],
    answer: `HAVING dùng để lọc dữ liệu sau khi đã GROUP BY.

Ví dụ:
SELECT MaLop, COUNT(*) AS SoSinhVien
FROM SinhVien
GROUP BY MaLop
HAVING COUNT(*) > 5;`
  },
  {
    keywords: ["where và having", "where having khác nhau", "where va having"],
    answer: `WHERE và HAVING khác nhau như sau:

WHERE:
- Lọc dữ liệu trước khi nhóm
- Dùng với dữ liệu bình thường

HAVING:
- Lọc dữ liệu sau khi GROUP BY
- Thường dùng với COUNT, SUM, AVG...`
  },
  {
    keywords: ["insert", "insert là gì", "thêm dữ liệu", "them du lieu"],
    answer: `INSERT dùng để thêm dữ liệu mới vào bảng.

Ví dụ:
INSERT INTO SinhVien (MaSV, HoTen, Diem)
VALUES ('SV01', N'Nguyễn An', 8.5);`
  },
  {
    keywords: ["update", "update là gì", "sửa dữ liệu", "sua du lieu"],
    answer: `UPDATE dùng để sửa dữ liệu đã có trong bảng.

Ví dụ:
UPDATE SinhVien
SET Diem = 9
WHERE MaSV = 'SV01';`
  },
  {
    keywords: ["delete", "delete là gì", "xóa dữ liệu", "xoa du lieu"],
    answer: `DELETE dùng để xóa dữ liệu trong bảng.

Ví dụ:
DELETE FROM SinhVien
WHERE MaSV = 'SV01';

Lưu ý: Nên có WHERE để tránh xóa toàn bộ dữ liệu.`
  },
  {
    keywords: ["like", "like là gì", "tìm kiếm gần đúng", "tim kiem gan dung"],
    answer: `LIKE dùng để tìm kiếm gần đúng theo mẫu.

Ví dụ:
SELECT * FROM SinhVien
WHERE HoTen LIKE N'%An%';

Câu này tìm sinh viên có tên chứa chữ An.`
  },
  {
    keywords: ["between", "between là gì"],
    answer: `BETWEEN dùng để lọc dữ liệu trong một khoảng.

Ví dụ:
SELECT * FROM SinhVien
WHERE Diem BETWEEN 5 AND 8;

Câu này lấy sinh viên có điểm từ 5 đến 8.`
  },
  {
    keywords: ["in là gì", "in la gi", "in"],
    answer: `IN dùng để kiểm tra giá trị có nằm trong một danh sách hay không.

Ví dụ:
SELECT * FROM SinhVien
WHERE MaLop IN ('L01', 'L02');`
  },
  {
    keywords: ["null", "is null", "is null là gì"],
    answer: `IS NULL dùng để tìm dữ liệu đang bị trống hoặc chưa có giá trị.

Ví dụ:
SELECT * FROM SinhVien
WHERE Email IS NULL;`
  },
  {
    keywords: ["primary key", "khóa chính", "khoa chinh"],
    answer: `PRIMARY KEY là khóa chính.

Khóa chính dùng để xác định duy nhất mỗi dòng trong bảng.
Ví dụ: MaSV là mã sinh viên, không được trùng nhau.`
  },
  {
    keywords: ["foreign key", "khóa ngoại", "khoa ngoai"],
    answer: `FOREIGN KEY là khóa ngoại.

Khóa ngoại dùng để liên kết dữ liệu giữa hai bảng.
Ví dụ: MaLop trong bảng SinhVien liên kết với MaLop trong bảng Lop.`
  },
  {
    keywords: ["count", "count là gì", "đếm", "dem"],
    answer: `COUNT dùng để đếm số dòng dữ liệu.

Ví dụ:
SELECT COUNT(*) FROM SinhVien;

Câu này đếm tổng số sinh viên.`
  },
  {
    keywords: ["sum", "sum là gì", "tính tổng", "tinh tong"],
    answer: `SUM dùng để tính tổng giá trị.

Ví dụ:
SELECT SUM(Diem) FROM SinhVien;`
  },
  {
    keywords: ["avg", "avg là gì", "trung bình", "trung binh"],
    answer: `AVG dùng để tính giá trị trung bình.

Ví dụ:
SELECT AVG(Diem) FROM SinhVien;`
  },
  {
    keywords: ["max", "max là gì", "lớn nhất", "lon nhat"],
    answer: `MAX dùng để lấy giá trị lớn nhất.

Ví dụ:
SELECT MAX(Diem) FROM SinhVien;`
  },
  {
    keywords: ["min", "min là gì", "nhỏ nhất", "nho nhat"],
    answer: `MIN dùng để lấy giá trị nhỏ nhất.

Ví dụ:
SELECT MIN(Diem) FROM SinhVien;`
  },
  {
    keywords: ["nvarchar", "nvarchar là gì"],
    answer: `NVARCHAR dùng để lưu chuỗi Unicode.

Trong SQL Server, NVARCHAR phù hợp để lưu tiếng Việt có dấu.`
  },
  {
    keywords: ["varchar", "varchar là gì"],
    answer: `VARCHAR dùng để lưu chuỗi ký tự.

Nếu dữ liệu có tiếng Việt có dấu, nên dùng NVARCHAR thay vì VARCHAR.`
  },
  {
    keywords: ["int", "int là gì"],
    answer: `INT là kiểu dữ liệu số nguyên.

Ví dụ: tuổi, số lượng, mã số dạng số.`
  },
  {
    keywords: ["date", "date là gì"],
    answer: `DATE là kiểu dữ liệu dùng để lưu ngày tháng.

Ví dụ: NgaySinh, NgayDangKy.`
  },
  {
    keywords: ["distinct", "distinct là gì"],
    answer: `DISTINCT dùng để loại bỏ dữ liệu trùng lặp.

Ví dụ:
SELECT DISTINCT MaLop
FROM SinhVien;

Câu này lấy danh sách mã lớp không bị trùng.`
  },
  {
    keywords: ["as là gì", "as la gi", "as"],
    answer: `AS dùng để đặt tên tạm thời cho cột hoặc bảng.

Ví dụ:
SELECT HoTen AS TenSinhVien
FROM SinhVien;`
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
- JOIN là gì?
- GROUP BY dùng để làm gì?
- PRIMARY KEY là gì?
- UPDATE khác DELETE thế nào?`;
}

function addMessage(type, author, text) {
  const div = document.createElement("div");
  div.className = `message ${type}`;
  div.innerHTML = `
    <strong>${author}</strong>
    <p>${text}</p>
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
