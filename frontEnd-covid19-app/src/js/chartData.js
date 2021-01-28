  // =================== Script Chart js ==================
    // ++++++++++++  Table 1: Deaths ++++++++++++++
  function Chart1(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: ['rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
        }],
    };

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: '$ Billion'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: 'Name'
                    }
                }]
            },
        }
    });

    return myChart;
}



// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);

        console.log(json.splice(0, 10));

        // Map json labels  back to values array
        var labels = json.splice(0, 100).map(function (e) {

            return e.Country;
        });

        // Map json values back to values array
        var values = json.splice(0, 100).map(function (e) {

            return (e.Confirmed);

            // Divide to billions in units of ten
        });

        Chart1(labels, values, "Cas Confirmed");
    }
};
xhttp.open("GET", "https://api.covid19api.com/dayone/country/morocco", false);
xhttp.send();



// ++++++++++++  Table 2: Deaths ++++++++++++++
function Chart2(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: ['rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
        }],
    };

    var ctx = document.getElementById("chart-2").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: '$ Billion'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: 'Name'
                    }
                }]
            },
        }
    });

    return myChart;
}



// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);

        console.log(json.splice(0, 10));

        // Map json labels  back to values array
        var labels = json.splice(0, 100).map(function (e) {

            return e.Country;
        });

        // Map json values back to values array
        var values = json.splice(0, 100).map(function (e) {

            return (e.Deaths);

            // Divide to billions in units of ten
        });

        Chart2(labels, values, "Cas Deaths");
    }
};
xhttp.open("GET", "https://api.covid19api.com/dayone/country/morocco", false);
xhttp.send();


// ++++++++++++  Table 3: Deaths ++++++++++++++
function Chart3(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: ['rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
        }],
    };

    var ctx = document.getElementById("chart-3").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: '$ Billion'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: 'Name'
                    }
                }]
            },
        }
    });

    return myChart;
}



// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);

        console.log(json.splice(0, 10));

        // Map json labels  back to values array
        var labels = json.splice(0, 100).map(function (e) {

            return e.Country;
        });

        // Map json values back to values array
        var values = json.splice(0, 100).map(function (e) {

            return (e.Recovered);

            // Divide to billions in units of ten
        });

        Chart3(labels, values, "Cas Recovered");
    }
};
xhttp.open("GET", "https://api.covid19api.com/dayone/country/morocco", false);
xhttp.send();


// ++++++++++++  Table 43: Deaths ++++++++++++++
function Chart4(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: ['rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
        }],
    };

    var ctx = document.getElementById("chart-4").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
            scales: {
                xAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: '$ Billion'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true
                        // labelString: 'Name'
                    }
                }]
            },
        }
    });

    return myChart;
}



// Ref - https://github.com/jesseokeya/Forbes400  / https://forbes400.herokuapp.com/

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.response);

        console.log(json.splice(0, 10));

        // Map json labels  back to values array
        var labels = json.splice(0, 100).map(function (e) {

            return e.Country;
        });

        // Map json values back to values array
        var values = json.splice(0, 100).map(function (e) {

            return (e.Active);

            // Divide to billions in units of ten
        });

        Chart4(labels, values, "Cas Active");
    }
};
xhttp.open("GET", "https://api.covid19api.com/dayone/country/morocco", false);
xhttp.send();
