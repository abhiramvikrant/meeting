create table Users(id int identity(1,1) primary key, Username nvarchar(50), password nvarchar(50))
GO
Create table meetings( MeetingId int identity(1,1) primary key, Name nvarchar(100), Agenda nvarchar(50), MeetingDate smalldatetime, StartTime  nvarchar(20))
Go
Create table Attendees(AttendeeID int identity(1,1) primary key, Name nvarchar(100))
GO
Create table MeetingAttendees(MeetingID INT FOREIGN KEY REFERENCES meetings(MeetingID), AttendeeID INT FOREIGN KEY REFERENCES Attendees(AttendeeID))
GO