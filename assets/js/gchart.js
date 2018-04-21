google.charts.load('current', {'packages':['gantt']});
    google.charts.setOnLoadCallback(drawChart);



    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Project Plan');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['0', 'Understanding the project specifications', 'Requirements Engineering',
         new Date(2017, 8, 27), new Date(2017, 9, 1), null, 100, null],
        ['1', 'Researching  web technologies', 'Requirements Engineering',
         new Date(2017, 9, 2), new Date(2017, 9, 8), null, 100, null],
        ['2', 'Wireframe design', 'Software Design',
         new Date(2017, 9, 9), new Date(2017, 9, 15), null, 100, null],
        ['3', 'Acquire 3 web technologies', 'Requirements Engineering',
         new Date(2017, 9, 16), new Date(2017, 9, 22), null, 100, null],
        ['4', 'Finalize website wireframe', 'Software Design',
         new Date(2017, 9, 23), new Date(2017, 9, 29), null, 100, null],
        ['5', 'Decide Implementation strategy', 'Software Design',
         new Date(2017, 9, 30), new Date(2017, 10, 5), null, 100, null],
        ['6', 'Writing Group Report ', 'Software Design',
          new Date(2017, 9, 9), new Date(2018, 0, 28), null, 100, null],
        ['7', 'Development of basic template', 'Software Design',
         new Date(2017, 9, 16), new Date(2017, 10, 5), null, 100, null],
        ['8', 'Intitial Website Increment', 'Implementation',
          new Date(2017, 10, 6), new Date(2017, 10, 12), null, 100, null],
        ['9', 'Second Website Increment', 'Implementation',
         new Date(2017, 10, 13), new Date(2017, 10, 19), null, 100, null],
        ['10', 'Third Website Increment ', 'Implementation',
         new Date(2017, 10, 20), new Date(2017, 10, 26), null, 100, null],
        ['11', 'Fourth Website Increment', 'Implementation',
         new Date(2017, 10, 27), new Date(2017, 11, 3), null, 100, null],
        ['12', 'Independent Rework', 'Implementation',
         new Date(2017, 11, 4), new Date(2018, 0, 10), null, 100, null],
        ['13', 'Adding finishing touches to the website ', 'Implementation',
         new Date(2018, 0, 11), new Date(2018, 0, 22), null, 100, null],
        ['14', 'Finalizing Website and Group Report', 'Submissions',
          new Date(2018, 0, 22), new Date(2018, 0, 28), null, 100, null]
      ]);

      var options = {
        height: 500,
        gantt: {
          trackHeight: 30,
          criticalPathEnabled: true,
          criticalPathStyle: {
            stroke: '#e64a19',
            strokeWidth: 5
          }
        }
      };

      var chart = new google.visualization.Gantt(document.getElementById('plan-div'));

      chart.draw(data, options);
    }
