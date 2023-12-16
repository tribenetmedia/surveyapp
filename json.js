export const json = {
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "question1",
     "title": "test",
     "isRequired": true
    },
    {
     "type": "text",
     "name": "question2",
     "title": "test2",
     "isRequired": true
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "tagbox",
     "name": "question3",
     "choices": [
      "Item 1",
      "Item 2",
      "Item 3"
     ]
    }
   ],
   "visibleIf": "{question1} = 't'"
  }
 ],
 "triggers": [
  {
   "type": "runexpression",
   "expression": "{question1} empty",
   "setToName": "question2"
  }
 ],
 "showPrevButton": false,
 "pagePrevText": "",
 "previewText": "",
 "questionsOnPageMode": "questionPerPage"
}