const text = 'global';
{
    console.log(text);
    const text = 'local';
    {
        // console.log(text);
    }
}