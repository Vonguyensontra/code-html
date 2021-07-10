

// $(document).ready(function () {
//     //debugger;


// });


// function ValidateEmail(mail) {
//     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
//         return (true)
//     }
//     // alert("You have entered an invalid email address!")
//     return (false)
// };

// function ValidatePhone(phone) {
//     if (/^[0-9\-\+]{9,15}$/.test(phone)) {
//         return (true)
//     }
//     // alert("You have entered an invalid email address!")
//     return (false)
// };

// function contactSubmit() {
//     //1 get inserted values
//     var email = $("#email").val();
//     var phone = $("#namePhone").val();


//     //2 validate data
//     if ($("#nameContact").val() == '') {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Vui lòng nhập thông tin của bạn',
//             text: 'Bạn nhập hoặc chưa nhập đầy đủ các thông tin',
//             //footer: '<a href>Why do I have this issue?</a>'
//         })
//         return;
//     };
//     if (phone == '') {
//         Swal.fire({
//             icon: 'info',
//             title: 'Vui lòng nhập Số điện thoại của bạn!',
//             //text: 'Hãy kiểm tra lại định dạng Số điện thoại',
//             //footer: '<a href>Why do I have this issue?</a>'
//         })
//         return;
//     };
//     if (phone.length < 9) {
//         Swal.fire({
//             icon: 'info',
//             title: 'Số điện thoại không hợp lệ!',
//             //text: 'Hãy kiểm tra lại định dạng Số điện thoại',
//             //footer: '<a href>Why do I have this issue?</a>'
//         })
//         return;
//     };
//     if (email == '') {
//         Swal.fire({
//             icon: 'info',
//             title: 'Vui lòng nhập email của bạn',
//             //text: 'Hãy kiểm tra lại định dạng mail!',
//             //footer: '<a href>Why do I have this issue?</a>'
//         })
//         return;
//     };
//     if (ValidateEmail(email) == false) {
//         Swal.fire({
//             icon: 'info',
//             title: 'Vui lòng kiểm tra lại định dạng email',
//             //text: 'Hãy kiểm tra lại định dạng mail!',
//             //footer: '<a href>Why do I have this issue?</a>'
//         })
//         return;
//     };

//     if ($("#messageContent").val() == '') {
//         Swal.fire({
//             icon: 'info',
//             title: 'Vui lòng nhập tin nhắn của bạn',
//             //text: 'hãy nhập tin nhắn trên 50 ký tự',
//             //footer: '<a href>Why do I have this issue?</a>'
//         })
//         return;
//     };
//     //3 insert data
//     //debugger;
//     var dt = new Date();
//     var obj = {
//         "Id": 0,
//         "Name": $("#nameContact").val(),
//         "Phone": $("#namePhone").val(),
//         "Active": 1,
//         "Email": $("#email").val(),
//         "Description": $("#messageContent").val(),
//         "Message": $("#messageContent").val(),
//         "Job": $("#nameJob").val(),
//         "ContactStatusId": 1000002,
//         "IsChecked": 0,
//         "CreatedTime": dt,
//     };
//     $.ajax({
//         type: "POST",
//         contentType: "application/json",
//         url: "Contact/api/Add",
//         data: JSON.stringify(obj),
//         success: function (responseData) {
//             //responseData = JSON.parse(responseData)
//             if (responseData.status == 201 && responseData.message === "CREATED") {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Thành công!',
//                     text: 'Chúng tôi sẽ liện hệ lại bạn trong thời gian sớm nhất',

//                 }).then((result) => {
//                     location.reload();
//                     if (result.value) {

//                     }
//                 });
//             }
//         },
//         error: function (e) {
//             //console.log(e.message);
//             Swal.fire(
//                 'Thất bại',
//                 'Có lỗi xảy ra, Vui lòng kiểm tra lại thông tin của bạn!',
//                 'error'
//             );
//         }
//     });
// }


// function emailSubmit() {
//     //debugger;
//     var email = $("#emailSub").val();
//     //debugger;
//     //2 validate data
//     if (email == '') {
//         Swal.fire({
//             icon: 'warning',
//             title: 'Vui lòng nhập email của bạn',
//             text: 'Bạn hãy nhập email để đăng ký nhận thông báo'
//         })
//         return;
//     };
//     if (ValidateEmail(email) == false) {
//         Swal.fire({
//             icon: 'error',
//             title: 'Vui lòng kiểm tra lại định dạng email',
//         })
//         return;
//     };
//     var dt = new Date();
//     var obj = {
//         "Id": 0,
//         "Name": $("#emailSub").val(),
//         "Active": 1,
//         "IsChecked": 0,
//         "Email": $("#emailSub").val(),
//         "Description": "email",
//     };
//     $.ajax({
//         type: "POST",
//         contentType: "application/json",
//         url: "Subscribe/api/Add",
//         data: JSON.stringify(obj),
//         success: function (responseData) {
//             if (responseData.status == 201 && responseData.message === "CREATED") {
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Thành công!',
//                     text: 'Gửi liên hệ thành công!',
//                     footer: 'Lạc Việt Online đã nhận được liên hệ của các bạn',
//                 });
//                 setTimeout(function () {
//                     window.location.reload();
//                 }, 4000);
//             }
//             if (responseData.status == 202 && responseData.message == "EMAILEXIST") {
//                 Swal.fire({
//                     icon: 'error',
//                     title: 'Email đã tồn tại!',
//                     text: 'Email này đã được đăng ký trước đó!',
//                     footer: 'Cảm ơn bạn đã đăng ký email tại Lạc Việt Online',
//                     timer: 4000
//                 });
//                 setTimeout(function () {
//                     $("#emailSub").val("");
//                 }, 6000);
//             }
//         },
//         error: function (e) {
//             console.log(e.message);
//             Swal.fire(
//                 'Thất bại',
//                 'Lỗi không xác định, vui lòng thử lại',
//                 'error'
//             );
//         }
//     });
// }