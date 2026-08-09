function welcome(name: string) {
    console.log('hello');

    const user = {
        name: 'Rakesh',
    };

    const fname = user['name'];

    return name + fname;
}

welcome('Rudra');
