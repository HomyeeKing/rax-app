import { createElement } from 'rax';

function Header() {
  return (
    <div className="flex items-center justify-between border">
      <div className="flex items-center">
        <img width="50" height="50" className="object-cover" src="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" alt="" />
        <span className="font-bold ml-3 text-xl">Rax Playground</span>
      </div>

      <div>
        Version
      </div>

    </div>
  );
}

export default Header;
