class Report{
    generate(data){
        console.log("Row data: " + data);
    }

}
class HTTMLReport extends Report{
       generate(data){
        console.log("<html><body> " + data + " </html></bosy>");
    }
}
class JSONReport extends Report{
     generate(data){
        console.log(`{"reports": " ` + data + `"}`);
    }
}


class TextReport extends Report {
    generate(data) {
        console.log("=== REPORT ===\n" + data + "\n==============");
    }
}

let reports=[new Report(),new HTTMLReport(),new JSONReport(),new TextReport()];
reports.forEach(function(r){
    r.generate("5 Test case Passed 1 failed");
    console.log("-------");

})
