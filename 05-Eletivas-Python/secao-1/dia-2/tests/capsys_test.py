def test_print_to_stdout(capsys):
    print("Hello, world!")
    captured = capsys.readouterr()
    assert captured.out == "Hello, world!\n"
