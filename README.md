*----------*
*-TEACHERS-*
*----------*
************
**POST API/TEACHERS/REGISTER**
Require:
username (unique, required)
password (required)
teacher_name
***
Creates an account for the teacher, and logs them in.

**POST API/TEACHERS/LOGIN**
Require:
username (required)
password (required)
***
Logs a teacher in.

**GET API/TEACHERS/:id**
Returns:
teacher_name
scores (array of score objects)

**UPDATE /TEACHERS/:id**
Required: teacher_name, mic_sensitiviy, animal_change_time
***
Changes their display name or settings.

**DELETE API/TEACHERS/:id**
***
Deletes the Whole Account of the teacher.


*--------*
*-SCORES-*
*--------*
**********
**GET API/SCORE/START**
Returns a new score object, or an error if a new one is started while an open one exists.

**PUT API/SCORE/END**
{final_score}
Ends a score object, "closes" it.

**GET API/SCORE/HISTORY**
Returns the array of scores, and several convenient stats, worst, best, average, last 7 day total, last 30 day total, whole year total.

**DELETE API/SCORE/RESET**
Deletes all the scores under the teacher to "restart" with a new year
