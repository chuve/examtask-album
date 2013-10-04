$(function(){

var studentsListTemplate = $('#students-list').html();
	studentsListTemplate = Handlebars.compile(studentsListTemplate);

var studentTemplate = $('#students-item').html();
	studentTemplate = Handlebars.compile(studentTemplate);

var lecturesListTemplate = $('#lectures-list').html();
	lecturesListTemplate = Handlebars.compile(lecturesListTemplate);

var students_data = {
	students: [
    {name: "Василий Пупкин", photo: "i/profile.jpg"},
    {name: "Иван Иванов", photo: "i/profile.jpg"},
    {name: "Василий Пупкин", photo: "i/profile.jpg"},
    {name: "Иван Иванов", photo: "i/profile.jpg"},
    {name: "Василий Пупкин", photo: "i/profile.jpg"},
    {name: "Иван Иванов", photo: "i/profile.jpg"}
  ]
};

var student_data = {
	name: "Иван Иванов",
	birthaday: "05.10.1991",
	city: "г.Москва",
	social: {
		vkontakte: "vasuy",
		facebook: "vasuy",
		skype: "vasuy",
		github: "vasuy"
	},
	about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

var lectures_data = {
	lectures: [
    {	title: "Кеширование на клиенте и сервере",
		lecturer: "Иван Иванов",
		date: "03.10.2013",
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		video_link: "http://yadi.sk/d/j8lW6BR_9rxP9",
		pdf_link: "http://yadi.sk/d/r7OohrZ79vGyK"
    },
    {	title: "Общий цикл разработки (dev-cycle)",
		lecturer: "Иван Иванов",
		date: "03.10.2013",
		about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		video_link: "http://yadi.sk/d/j8lW6BR_9rxP9",
		pdf_link: ""
    }
    ]
};

var generatedStudent = studentTemplate(student_data);
var generatedStudentsList = studentsListTemplate(students_data);
var generatedLecturesList = lecturesListTemplate(lectures_data);

$('#dynamic').append(generatedStudentsList);
$('#dynamic').append(generatedStudent);
$('#dynamic').append(generatedLecturesList);

});