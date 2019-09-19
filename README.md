*----------*
*-TEACHERS-*
*----------*
************
**[POST] API/TEACHERS/REGISTER**
Require:
str username (unique, required)
str password (required)
str teacher_name (what they go by in front of the class)
***
Creates an account for the teacher, and logs them in.
USERNAME is what they use to login, TEACHER_NAME is what is displayed to the class.

**[POST] API/TEACHERS/LOGIN**
Require:
str username (required)
str password (required)
***
Logs a teacher in.

**[GET] API/TEACHERS/:id**
Returns:
int teacher_id
str username
str teacher_name,
int mic_sensitiviy,
int animal_change_time,
arr scores (array of score objects)

**UPDATE /TEACHERS/:id**
Required (All optional):
str teacher_name,
int mic_sensitiviy,
int animal_change_time
***
Changes their display name or settings.

**DELETE API/TEACHERS/:id**
***
Deletes the Whole Account of the teacher.

*******************************************************************************

*--------*
*-SCORES-*
*--------*
**********
**POST API/SCORE/START**
Returns:
int score_id
int score_teacher_id //automatically set on the backend
int score_value //defaults to 100
bool score_closed //defaults to false, handled on backend.
***
Returns a new score object, or the currently open score object if this is requested while an open one exists.
Score Value is the really only variable that should get changed on the front end, everything else is handled on the backend.

**PUT API/SCORE/END**
Requires:
int score_value
***
Ends a score object, "closes" it.

**GET API/SCORE/HISTORY**
Returns the array of scores, and several convenient stats, worst, best, average, last 7 day total, last 30 day total, whole year total.

**DELETE API/SCORE/RESET**
Deletes all the scores under the teacher to "restart" with a new year

**DELETE API/SCORE/:id**
Deletes this specific score, removing it from the totals.
