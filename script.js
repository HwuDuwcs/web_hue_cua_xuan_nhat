AOS.init({ duration: 800, once: true, offset: 80 });

// Navbar scroll
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    nav.classList.toggle('scrolled', window.scrollY > 60);
    document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 300);
});

// Scroll to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mobile menu
function openMobileMenu() { document.getElementById('mobileMenu').classList.add('open'); }
function closeMobileMenu() { document.getElementById('mobileMenu').classList.remove('open'); }

// News data
const newsData = [
    {
        img: 'https://images.vietnamtourism.gov.vn/vn//images/2022/thang_6/1706.cho_que_ngay_hoi_1.jpg',
        date: '15 tháng 1, 2026',
        title: 'Chợ Quê Ngày Hội 2026 – Đặc Sắc Văn Hóa Tại Cầu Ngói Thanh Tân Huế',
        body: `<p><strong>Diễn ra từ ngày 10 - 20/1 tại điểm du lịch cộng đồng Cầu ngói Thanh Toàn (xã Thủy Thanh, thị xã Hương Thủy, tỉnh Thừa Thiên Huế), 
        “Chợ quê ngày hội” sẽ mở rộng quy mô và đa dạng hơn các hoạt động trải nghiệm, trò chơi dân gian, ẩm thực… với mục 
        đích hướng đến là góp phần đa dạng, tạo thêm dấu ấn cho Festival Huế 2026, cũng như để du khách có được những trải nghiệm thú vị hơn.</strong> </p><br/>
      <p>Không chỉ hoàn thiện hơn nữa các hoạt động trình diễn, trải nghiệm (xay lúa, giã gạo, giần, sàng; đạp nước, cất rớ, nấu rượu gạo, làm bánh, chằm nón, làm nông…) phát huy tính độc đáo, 
      vui nhộn ở lần tổ chức 
      trước, ban tổ chức sẽ bổ sung thêm một số trò chơi thú vị, 
      như: đá bóng 2 người 3 chân, đua thuyền trên cạn, đu dây qua sông, trò chơi liên hoàn (trèo hái cau - đi hai chân trên ván - đạp nước, tát nước - xay lúa, giã gạo - 
      bịt mắt bắt gà trên cạn - bắt vịt trên hói - đi cầu khỉ - làm bánh - chằm nón)… Với việc được tổ chức xuyên 
      suốt và bất kỳ ai cũng có thể tham gia, những hoạt động này hứa hẹn giúp lễ hội luôn tràn ngập niềm vui, tiếng cười.</p><br/>
      <p>“Trong dịp diễn ra “Chợ quê ngày hội”, chúng tôi sẽ kết nối các đơn vị lữ hành trên địa bàn xúc tiến, quảng bá du lịch, giới thiệu điểm đến Điểm du lịch cộng đồng Cầu ngói Thanh Toàn, 
      tổ chức các tuor du lịch cộng đồng, hướng dẫn du khách tham quan vườn trải nghiệm chân quê, vườn Văn Thánh, Vân Thê Garden & Homestay, tham quan hầm bí mật, các di tích lịch sử cấp tỉnh, 
      cấp quốc gia trên địa bàn nhằm khai thác và lan tỏa nhiều hơn thế mạnh về cảnh quan, môi trường, di tích, tiềm năng du lịch của địa phương”, bà Ái Hương chia sẻ.</p> <br>
      <p>Liên quan đến đẩy mạnh phát triển du lịch cộng đồng trên địa bàn, sau “Chợ quê ngày hội” hưởng ứng Festival Huế 2022, đầu tháng 8 tới, thị xã Hương Thủy dự kiến tổ chức Tuần lễ “Xúc tiến 
      du lịch cộng đồng - Chiến khu Dương Hòa”, qua đó, tạo diễn đàn cho các doanh nghiệp dịch vụ du lịch trong, ngoài địa phương cùng các cơ quan quản lý Nhà nước gặp gỡ, trao đổi, tháo gỡ và đề 
      xuất các vấn đề liên quan đến cơ chế, 
        chính sách phát triển du lịch; chia sẻ ý tưởng, giải pháp thúc đẩy phát triển du lịch, nhất là xu thế, định hướng các tuyến điểm, sản phẩm và hình thức vận hành du lịch an toàn…</p>`

    },
    {
        img: 'https://statics.vinwonders.com/suoi-voi-hue-0_1633667147.jpg',
        date: '08 tháng 3, 2026',
        title: 'Top 10 Địa Điểm Tránh Nóng Mùa Hè Ở Huế 2026',
        body: `<p>Mùa hè đến, thời tiết nóng nực khiến nhiều người tìm kiếm những địa điểm mát mẻ, thoáng đãng để thư giãn và tránh xa cái nóng. 
        Nếu bạn đang tìm kiếm những nơi lý tưởng để "trốn nóng" ở Huế, dưới đây là 10 địa điểm không thể bỏ qua! <br><br>
<strong> Suối Voi – Lộc Bình </strong> <br>
Suối Voi nằm trong khu vực Lộc Bình, cách trung tâm Huế không xa. Đến đây, bạn sẽ được đắm mình trong làn nước trong xanh, 
mát lạnh và tận hưởng không gian thiên nhiên hoang sơ, tĩnh lặng. Không khí ở đây trong lành, là lựa chọn lý tưởng để thư giãn vào những ngày hè oi ả. <br><br>
<strong> Suối nước nóng Thanh Tân – Phong Điền </strong> <br>
Nổi tiếng với các suối nước nóng thiên nhiên, Suối nước nóng Thanh Tân là nơi bạn có thể thư giãn trong làn nước ấm áp,
 giúp cơ thể thư giãn và tái tạo năng lượng. Không chỉ có nước nóng, nơi đây còn có các hồ bơi ngoài trời mát lạnh, cực kỳ thích hợp cho các gia đình hoặc nhóm bạn đi du lịch. <br><br>
<strong>Công viên 24/9</strong> <br>
Nằm ngay giữa trung tâm thành phố, công viên 24/9 là một không gian xanh lý tưởng để tránh xa sự oi bức của phố xá. Với 
hàng cây xanh rợp bóng, những khu vực bãi cỏ mát rượi, công viên là một điểm đến lý tưởng cho những ai muốn tận hưởng không gian trong lành mà không phải đi xa. <br><br>
<strong>Làng Hồ Truồi </strong><br>
Nằm cách trung tâm thành phố khoảng 20km, Làng Hồ Truồi là một điểm đến thư giãn tuyệt vời trong mùa hè. Với không gian yên tĩnh, 
nước hồ mát lạnh, bạn có thể vừa tắm mát, vừa thưởng thức cảnh sắc thiên nhiên hữu tình. Đây là một điểm đến lý tưởng cho những ai yêu thích sự bình yên và tĩnh lặng. <br><br>
<strong>Đầm Chuồn – Phú Vang</strong> <br>
Nếu bạn yêu thích không gian yên bình và gần gũi với thiên nhiên, Đầm Chuồn là một lựa chọn tuyệt vời. Với khung cảnh hoang sơ, 
những chiếc thuyền con chở bạn dọc theo mặt nước trong xanh, Đầm Chuồn sẽ mang đến cho bạn cảm giác thư giãn tuyệt đối. Đặc biệt, không khí nơi đây luôn mát mẻ, giúp bạn dễ dàng "né" cái nóng mùa hè. <br><br>
<strong>Hồ Tịnh Tâm</strong> <br>
Nằm trong khu vực của các di tích lịch sử ở Huế, Hồ Tịnh Tâm là một hồ nước đẹp, yên bình với làn nước trong xanh. Bạn có thể dạo 
quanh hồ, thư giãn dưới bóng cây xanh mát, tận hưởng không khí trong lành, mát mẻ giữa mùa hè. <br><br>
<strong>Chùa Thiên Mụ</strong> <br>
Một trong những điểm du lịch nổi tiếng ở Huế, Chùa Thiên Mụ không chỉ thu hút bởi sự linh thiêng mà còn bởi không gian mát mẻ, thoáng đãng. 
Nằm trên đỉnh đồi, bạn sẽ được chiêm ngưỡng vẻ đẹp của thiên nhiên và cảm nhận được sự tĩnh lặng, mát mẻ của nơi này. <br><br>
<strong> Thác Mơ – Nam Đông</strong> <br>
Nằm giữa lòng núi rừng Huế, Thác Mơ mang đến một khung cảnh hùng vĩ và không khí cực kỳ mát mẻ. Đặc biệt vào mùa hè, nước ở thác rất mát, 
giúp bạn dễ dàng thư giãn và tránh xa cái nóng. Đây là một địa điểm lý tưởng cho những ai yêu thích khám phá thiên nhiên và trải nghiệm cảm giác mát lạnh. <br><br>
<strong>Khu du lịch sinh thái Hương Sơn</strong> <br>
Nằm trong khu vực của rừng Hương Sơn, khu du lịch sinh thái này mang đến một không gian thiên nhiên tuyệt vời để bạn thư giãn. Với những con 
suối trong xanh, bầu không khí tươi mát, Hương Sơn là điểm đến lý tưởng cho những ai muốn hòa mình vào thiên nhiên và tìm kiếm sự bình yên. <br><br>
<strong> Biển Lăng Cô</strong> <br>
Được biết đến như một trong những bãi biển đẹp nhất miền Trung, Lăng Cô là một lựa chọn tuyệt vời để "trốn" cái nóng mùa hè. Với bãi cát trắng 
mịn, làn nước trong xanh và mát mẻ, biển Lăng Cô sẽ là nơi lý tưởng để bạn thư giãn và tận hưởng không khí trong lành của biển. <br><br>
<hr>
Hy vọng những địa điểm trên sẽ giúp bạn có những giây phút thư giãn tuyệt vời và tránh xa cái nóng oi bức của mùa hè ở Huế. Hãy lên kế hoạch và 
        tận hưởng những khoảnh khắc tuyệt vời cùng gia đình và bạn bè!</p>`
    },
    {
        img: 'https://phetravel.com/uploads/kinh-nghiem-du-lich-hue-hanh-trinh-kham-pha-co-do-2024-1024x683.jpg.webp',
        date: '01 tháng 3, 2024',
        title: 'Hành trình khám phá Huế trong 4 ngày 3 đêm',
        body: `<p><strong>Ngày 1: Khởi hành – Làm quen với cố đô. </strong><br> Sáng khởi hành từ TP.HCM/Hà Nội đến Huế. Đến nơi, nhận phòng khách sạn và nghỉ ngơi.
         Buổi chiều, dạo quanh khu vực trung tâm, ghé thăm Kinh thành Huế – di sản nổi bật với kiến trúc cung đình cổ kính, tìm hiểu về lịch sử triều Nguyễn.<br>
Tối đến, thưởng thức ẩm thực Huế với các món đặc sản như bún bò Huế, bánh bèo, bánh nậm. Sau đó, tản bộ dọc bờ Sông Hương, tận hưởng không khí yên bình đặc trưng của thành phố.</p><br/>
      <p><strong>Ngày 2: Lăng tẩm – Chùa chiền – Văn hóa cung đình.</strong>  <br> Sáng tham quan Chùa Thiên Mụ – ngôi chùa linh thiêng và biểu tượng của Huế. 
      Sau đó tiếp tục hành trình khám phá các lăng tẩm nổi tiếng như Lăng Khải Định với kiến trúc độc đáo pha trộn Đông – Tây, và Lăng Minh Mạng mang vẻ đẹp hài hòa với thiên nhiên.<br>

Buổi chiều, nghỉ ngơi hoặc tham gia trải nghiệm mặc áo dài, chụp ảnh trong không gian cổ kính.<br>

Tối, lên thuyền rồng nghe ca Huế trên sông Hương – một nét văn hóa truyền thống đặc sắc, vừa thư giãn vừa cảm nhận chiều sâu nghệ thuật của vùng đất này.</p><br/>
      <p><strong>Ngày 3: Biển – Làng nghề – Ẩm thực địa phương.</strong>  <br> Sáng di chuyển đến Biển Lăng Cô – một trong những vịnh biển đẹp nhất Việt Nam. Tận hưởng không khí trong lành, tắm biển và thưởng thức hải sản tươi sống.<br>

Chiều ghé thăm các làng nghề truyền thống như Làng hương Thủy Xuân hoặc làng nón bài thơ, tìm hiểu cách làm sản phẩm thủ công và mua quà lưu niệm.<br>

Tối quay lại trung tâm, khám phá phố đi bộ Huế, thưởng thức các món ăn vặt và hòa mình vào không khí nhộn nhịp về đêm.</p> <br>
        <p><strong>Ngày 4: Chợ địa phương – Kết thúc hành trình.</strong>  <br> 
        Sáng tham quan Chợ Đông Ba – khu chợ nổi tiếng với đa dạng đặc sản như mè xửng, tôm chua, trà cung đình. Đây là nơi lý tưởng để mua quà trước khi về.<br>

Sau đó, nhâm nhi cà phê, tận hưởng những giây phút cuối cùng tại Huế – thành phố nhẹ nhàng, sâu lắng nhưng đầy sức hút.<br>

Kết thúc chuyến đi. Hành trình không chỉ là tham quan mà còn là cơ hội cảm nhận vẻ đẹp văn hóa, lịch sử và con người của cố đô Huế – nơi mỗi góc phố đều mang theo một câu chuyện riêng.</p>`
    }
];

function openModal(idx) {
    const d = newsData[idx];
    document.getElementById('modalImg').src = d.img;
    document.getElementById('modalDate').textContent = d.date;
    document.getElementById('modalTitle').textContent = d.title;
    document.getElementById('modalBody').innerHTML = d.body;
    document.getElementById('newsModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('newsModal').classList.remove('open');
    document.body.style.overflow = '';
}
function closeModalOutside(e) {
    if (e.target.id === 'newsModal') closeModal();
}

// Testimonial dots
const track = document.getElementById('testimonialTrack');
const cards = track.querySelectorAll('.testimonial-card');
const nav = document.getElementById('tNav');
cards.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 't-dot' + (i === 0 ? ' active' : '');
    dot.onclick = () => {
        cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        nav.querySelectorAll('.t-dot').forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
    };
    nav.appendChild(dot);
});