import { setVersion } from '@/transform';
import { createElement, useState } from 'rax';

function Header() {
  const [versions, setVersions] = useState([]);


  const getVersion = async () => {
    const res = await fetch(
      'https://api.github.com/repos/raxjs/rax-app/releases?per_page=100',
    );
    const releases = await res.json();
    setVersions(releases.map((item) => item.name));
  };
  return (
    <div className="flex items-center justify-between border">
      <div className="flex items-center">
        <img width="50" height="50" className="object-cover" src="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" alt="" />
        <span className="font-bold ml-3 text-xl">Rax Playground</span>
      </div>

      <div>
        Versions:
        <select
          name="version"
          id="version"
          onFocus={getVersion}
          onChange={(e) => {
            const currentVersion = e.target.value.slice(1);
            setVersion(currentVersion);
          }}
        >
          {versions.length && versions.map((v) => <option value={v} key={v} >{v}</option>)}
        </select>
      </div>

    </div>
  );
}

export default Header;
