/*global unexpected*/
// THIS FILE IS AUTOGENERATED! DO NOT CHANGE IT MANUALLY.
// It is built based on the examples in the documentation folder
// when the documentation site gets build by running "make site-build".
it.skipIf = function (condition) {
    (condition ? it.skip : it).apply(it, Array.prototype.slice.call(arguments, 1));
};

describe("documentation tests", function () {
    var isBrowser = typeof weknowhow !== 'undefined';
    var isPhantom = typeof mochaPhantomJS !== 'undefined';
    var expect;
    beforeEach(function () {
        expect = unexpected.clone();
        expect.output.preferredWidth = 80;

    });

    it("assertions/array-like/given-call-order.md contains correct examples", function () {
        var testPromises = [];
        var obj = {
            foo: function () { return 'foo'; },
            bar: function () { return 'bar'; },
            baz: function () { return 'baz'; }
        };
        sinon.spy(obj, 'foo');
        sinon.spy(obj, 'bar');
        sinon.spy(obj, 'baz');
        obj.foo();
        obj.bar();
        obj.baz();
        expect([obj.foo, obj.bar, obj.baz], 'given call order');

        try {
            expect([obj.bar, obj.foo, obj.baz], 'given call order');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect([obj.bar, obj.foo, obj.baz], 'given call order');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected bar, foo, baz to be called in order but were called as foo, bar, baz"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/threw.md contains correct examples", function () {
        var testPromises = [];
        var stub = sinon.stub();
        var error = new TypeError('wat');
        stub.throws(error);
        try { stub(); } catch (e) {}

        expect(stub, 'threw');
        expect(stub, 'threw', 'wat');
        expect(stub, 'threw', error);
        expect(stub, 'threw', { name: 'TypeError' });

        try {
            expect(sinon.spy(), 'threw', new SyntaxError());
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(sinon.spy(), 'threw', new SyntaxError());").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy threw SyntaxError()\n" +
                "  spy did not throw exception"
            );
        }

        expect(stub, 'always threw');
        expect(stub, 'always threw', 'wat');
        expect(stub, 'always threw', error);
        expect(stub, 'always threw', { name: 'TypeError' });

        try {
            stub.throws(new SyntaxError('waat'));
            try { stub(); } catch (e) {}

            expect(stub, 'always threw', /waat/);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("stub.throws(new SyntaxError('waat'));").nl();
                output.code("try { stub(); } catch (e) {}").nl();
                output.code("").nl();
                output.code("expect(stub, 'always threw', /waat/);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected stub always threw /waat/\n" +
                "\n" +
                "invocations(\n" +
                "  stub() at theFunction (theFileName:xx:yy)\n" +
                "  // expected: threw /waat/\n" +
                "  //   expected TypeError('wat') to satisfy /waat/\n" +
                "  stub() at theFunction (theFileName:xx:yy)\n" +
                ")"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-on.md contains correct examples", function () {
        var testPromises = [];
        var obj = { spy: sinon.spy() };
        obj.spy();
        expect(obj.spy, 'was called on', obj);

        try {
            var another = {};
            expect(obj.spy, 'was called on', another);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var another = {};").nl();
                output.code("expect(obj.spy, 'was called on', another);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy was called on {}\n" +
                "\n" +
                "invocations(\n" +
                "  spy() at theFunction (theFileName:xx:yy)\n" +
                "  // expected: was called on {}\n" +
                "  //   expected spy to be called with {} as this but was called with { spy: spy }\n" +
                ")"
            );
        }

        expect(obj.spy, 'was always called on', obj);

        try {
            obj.spy.call({});
            expect(obj.spy, 'was always called on', obj);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("obj.spy.call({});").nl();
                output.code("expect(obj.spy, 'was always called on', obj);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy was always called on { spy: spy }\n" +
                "\n" +
                "invocations(\n" +
                "  spy() at theFunction (theFileName:xx:yy)\n" +
                "  spy() at theFunction (theFileName:xx:yy)\n" +
                "  // expected: was called on { spy: spy }\n" +
                "  //   expected spy to be called with { spy: spy } as this but was called with {}\n" +
                ")"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-times.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy();
        increment(41);
        increment(42);
        increment(43);
        expect(increment, 'was called times', 3);

        try {
            var add = sinon.spy();
            add(41, 42);
            add(41, 43);
            add(41, 44);
            add(41, 45);
            expect(add, 'was called times', 2);
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var add = sinon.spy();").nl();
                output.code("add(41, 42);").nl();
                output.code("add(41, 43);").nl();
                output.code("add(41, 44);").nl();
                output.code("add(41, 45);").nl();
                output.code("expect(add, 'was called times', 2);").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy was called times 2\n" +
                "  expected\n" +
                "  invocations(\n" +
                "    spy( 41, 42 ) at theFunction (theFileName:xx:yy)\n" +
                "    spy( 41, 43 ) at theFunction (theFileName:xx:yy)\n" +
                "    spy( 41, 44 ) at theFunction (theFileName:xx:yy)\n" +
                "    spy( 41, 45 ) at theFunction (theFileName:xx:yy)\n" +
                "  )\n" +
                "  to have length 2\n" +
                "    expected 4 to be 2"
            );
        }

        var spy = sinon.spy();
        spy(1);
        expect(spy, 'was called once');
        spy(2);
        expect(spy, 'was called twice');
        spy(3);
        expect(spy, 'was called thrice');
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called-with.md contains correct examples", function () {
        var testPromises = [];
        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        expect(spy, 'was called with', { foo: 'bar' }, 'baz', sinon.match.truthy);

        try {
            expect(spy, 'was called with', 'baz', { foo: 'bar' });
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(spy, 'was called with', 'baz', { foo: 'bar' });").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy was called with 'baz', { foo: 'bar' }\n" +
                "\n" +
                "invocations(\n" +
                "  spy(\n" +
                "    { foo: 'bar' }, // should equal 'baz'\n" +
                "    'baz', // should equal { foo: 'bar' }\n" +
                "    'qux',\n" +
                "    'quux'\n" +
                "  ) at theFunction (theFileName:xx:yy)\n" +
                ")"
            );
        }

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        expect(spy, 'was always called with', { foo: 'bar' }, 'baz', expect.it('to be truthy'));

        try {
            spy({ foo: 'bar' }, 'baz');
            expect(spy, 'was always called with', { foo: 'bar' }, 'baz', expect.it('to be truthy'));
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("spy({ foo: 'bar' }, 'baz');").nl();
                output.code("expect(spy, 'was always called with', { foo: 'bar' }, 'baz', expect.it('to be truthy'));").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy\n" +
                "was always called with { foo: 'bar' }, 'baz', expect.it('to be truthy')\n" +
                "\n" +
                "invocations(\n" +
                "  spy( { foo: 'bar' }, 'baz', 'qux', 'quux' ) at theFunction (theFileName:xx:yy)\n" +
                "  spy( { foo: 'bar' }, 'baz', 'qux', 'quux' ) at theFunction (theFileName:xx:yy)\n" +
                "  spy(\n" +
                "    { foo: 'bar' },\n" +
                "    'baz'\n" +
                "    // missing: should be truthy\n" +
                "  ) at theFunction (theFileName:xx:yy)\n" +
                ")"
            );
        }

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux', 'quux');
        expect(spy, 'was called with exactly', { foo: 'bar' }, 'baz', sinon.match.truthy, 'quux');

        try {
            expect(spy, 'was called with exactly', { foo: 'bar' }, 'baz', expect.it('to be truthy'));
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(spy, 'was called with exactly', { foo: 'bar' }, 'baz', expect.it('to be truthy'));").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy\n" +
                "was called with exactly { foo: 'bar' }, 'baz', expect.it('to be truthy')\n" +
                "\n" +
                "invocations(\n" +
                "  spy(\n" +
                "    { foo: 'bar' },\n" +
                "    'baz',\n" +
                "    'qux',\n" +
                "    'quux' // should be removed\n" +
                "  ) at theFunction (theFileName:xx:yy)\n" +
                ")"
            );
        }

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz', 'qux');
        spy({ foo: 'bar' }, 'baz', 'qux');
        expect(spy, 'was always called with exactly', { foo: 'bar' }, 'baz', expect.it('to be truthy'));

        try {
            spy({ foo: 'bar' }, 'baz');
            expect(spy, 'was always called with exactly', { foo: 'bar' }, 'baz', expect.it('to be truthy'));
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("spy({ foo: 'bar' }, 'baz');").nl();
                output.code("expect(spy, 'was always called with exactly', { foo: 'bar' }, 'baz', expect.it('to be truthy'));").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy\n" +
                "was always called with exactly { foo: 'bar' }, 'baz', expect.it('to be truthy')\n" +
                "\n" +
                "invocations(\n" +
                "  spy( { foo: 'bar' }, 'baz', 'qux' ) at theFunction (theFileName:xx:yy)\n" +
                "  spy( { foo: 'bar' }, 'baz', 'qux' ) at theFunction (theFileName:xx:yy)\n" +
                "  spy(\n" +
                "    { foo: 'bar' },\n" +
                "    'baz'\n" +
                "    // missing: should be truthy\n" +
                "  ) at theFunction (theFileName:xx:yy)\n" +
                ")"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("assertions/spy/was-called.md contains correct examples", function () {
        var testPromises = [];
        var increment = sinon.spy();
        increment(42);
        expect(increment, 'was called');

        try {
            expect(sinon.spy(), 'was called');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("expect(sinon.spy(), 'was called');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy was called"
            );
        }

        expect(sinon.spy(), 'was not called');

        try {
            var add = sinon.spy();
            add(42, 42);
            expect(add, 'was not called');
            expect.fail(function (output) {
                output.error("expected:").nl();
                output.code("var add = sinon.spy();").nl();
                output.code("add(42, 42);").nl();
                output.code("expect(add, 'was not called');").nl();
                output.error("to throw");
            });
        } catch (e) {
            expect(e, "to have message",
                "expected spy was not called\n" +
                "\n" +
                "invocations(\n" +
                "  spy( 42, 42 ) at theFunction (theFileName:xx:yy) // should be removed\n" +
                ")"
            );
        }
        return expect.promise.all(testPromises);
    });

    it("index.md contains correct examples", function () {
        var testPromises = [];
        var obj = { spy: sinon.spy() };
        obj.spy(42);
        obj.spy({ foo: 'bar' }, 'baz', "qux");
        expect(obj.spy, "was called twice");
        expect(obj.spy, 'was called with', { foo: 'bar' }, 'baz', sinon.match.truthy);
        expect(obj.spy, 'was always called on', obj);

        var spy = sinon.spy();
        spy({ foo: 'bar' }, 'baz');
        spy('qux');
        spy('quux');

        expect(spy.args, 'to equal', [
            [{ foo: 'bar' }, 'baz'],
            ['qux'],
            ['quux']
        ]);

        expect(spy.args[1], 'to equal', ['qux']);

        expect(spy.args, 'to satisfy', {
            0: [
                { foo: 'bar' },
                expect.it('to be a string').and('to have length', 3)
            ],
            2: ['quux']
        });
        return expect.promise.all(testPromises);
    });
});
