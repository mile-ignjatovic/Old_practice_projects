// import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/skipUntil';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


// import { from } from 'rxjs/Observable/from';

// import { ReplaySubject } from 'rxjs/ReplaySubject';


// import 'rxjs/add/operator/share';
// var observable = Observable.create((observer: any) => {
//     try {
//         observer.next('hey emmit!')    
//         observer.next('how are you?')
//         setInterval(() => {
//         observer.next('i am good')            
//         }, 2000)    
//     } catch(err) {
//         observer.error(err)
//     }
// }).share();

// var observer = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('completed')
// );

// setTimeout(() => {
//     var observer2 = observable.subscribe(
//         (x: any) => addItem('Subscriber 2: '+x)
//     )
// }, 1000);

// var observable = fromEvent(document, 'mousemove');

// setTimeout(() => {
//     var subscription = observable.subscribe((x) => addItem(x))
// }, 500);

// var subject = new ReplaySubject(1);

// subject.subscribe(
//     data => addItem('observer 1: ' + data),
//     err => addItem('Error 1: ' +  err),
//     () => addItem('Complete 1')
// );

// subject.next('the first thing has been sent');
// subject.next('observer 2 is about to subscribe');

// var observer2 = subject.subscribe(data => addItem('observer 2 '+ data));

// subject.next('the second thing has been sent');
// subject.next('the third thing has been sent');

// observer2.unsubscribe();

// subject.next('the final thing has been sent');

// Observable.create((observer: any) => {
//     observer.next('Yo mofos')
// })
//     .map((val: any) => val.toUpperCase())
//     .subscribe((x: any) => addItem('this should be uppercase: '+x));

// from([
//     { first: 'gary', last: 'Simon', age: '34'},
//     { first: 'Mary', last: 'Smith', age: '34'},
//     { first: 'Jery', last: 'Irons', age: '34'}
// ])
//     .pluck('first')
//     .subscribe((x: any) => addItem(x));

var observable1 = Observable.create((data: any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++)
    }, 1000);
})

var observable2 = new Subject;

setTimeout(()=> {
    observable2.next('Hey from subject')
}, 3000);

var newObs = observable1.skipUntil(observable2);

newObs.map((a: any) => {
    a + a
}).subscribe((x: any) => {
    addItem(x);
})

function addItem(val: any) {
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}