import React from 'react';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

const Course = ({ courses, onDelete }) => {
    const { id } = useParams();
    const course = courses.find((e) => e.id === Number(id));

    return (
        <>
            <div className='courseContainer'>
                <h2>
                    {course.name} | Holes {course.holes}
                    <Link to={`/courses/${course.id}/edit`}>Add Score</Link>
                    <button
                        className="delete"
                        type="button"
                        onClick={() => onDelete(course.id)}
                    >
                        Delete
                    </button>
                </h2>
                <table>
                    <tr>
                        <th>Hole</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                        <th>5</th>
                        <th>6</th>
                        <th>7</th>
                        <th>8</th>
                        <th>9</th>
                        <th>OUT</th>
                        <th>10</th>
                        <th>11</th>
                        <th>12</th>
                        <th>13</th>
                        <th>14</th>
                        <th>15</th>
                        <th>16</th>
                        <th>17</th>
                        <th>18</th>
                        <th>19</th>
                        <th>IN</th>
                    </tr>
                    <tr>
                        <td>Blue 73.8/137</td>
                        <td>356</td>
                        <td>527</td>
                        <td>194</td>
                        <td>379</td>
                        <td>427</td>
                        <td>373</td>
                        <td>615</td>
                        <td>436</td>
                        <td>204</td>
                        <td>3511</td>
                        <td>524</td>
                        <td>390</td>
                        <td>397</td>
                        <td>184</td>
                        <td>551</td>
                        <td>365</td>
                        <td>461</td>
                        <td>184</td>
                        <td>405</td>
                        <td>3461</td>
                        <td>6972</td>
                    </tr>
                    <tr>
                        <td>Dark Green 71.0/131</td>
                        <td>332</td>
                        <td>518</td>
                        <td>163</td>
                        <td>344</td>
                        <td>405</td>
                        <td>357</td>
                        <td>548</td>
                        <td>402</td>
                        <td>174</td>
                        <td>3243</td>
                        <td>505</td>
                        <td>376</td>
                        <td>385</td>
                        <td>143</td>
                        <td>513</td>
                        <td>354</td>
                        <td>419</td>
                        <td>146</td>
                        <td>381</td>
                        <td>3222</td>
                        <td>6465</td>
                    </tr>
                    <tr>
                        <td>Grey 68.2/124</td>
                        <td>314</td>
                        <td>506</td>
                        <td>136</td>
                        <td>296</td>
                        <td>329</td>
                        <td>341</td>
                        <td>498</td>
                        <td>369</td>
                        <td>137</td>
                        <td>2926</td>
                        <td>435</td>
                        <td>342</td>
                        <td>337</td>
                        <td>128</td>
                        <td>458</td>
                        <td>337</td>
                        <td>343</td>
                        <td>119</td>
                        <td>366</td>
                        <td>2865</td>
                        <td>5791</td>
                    </tr>
                    <tr>
                        <td>{course.player_one}</td>
                        <td>{course.p_one_s_one}</td>
                        <td>{course.p_one_s_two}</td>
                        <td>{course.p_one_s_three}</td>
                        <td>{course.p_one_s_four}</td>
                        <td>{course.p_one_s_five}</td>
                        <td>{course.p_one_s_six}</td>
                        <td>{course.p_one_s_seven}</td>
                        <td>{course.p_one_s_eight}</td>
                        <td>{course.p_one_s_nine}</td>
                        <td>{course.p_one_s_ten}</td>
                        <td>{course.p_one_s_eleven}</td>
                        <td>{course.p_one_s_twelve}</td>
                        <td>{course.p_one_s_thirteen}</td>
                        <td>{course.p_one_s_fourteen}</td>
                        <td>{course.p_one_s_fifteen}</td>
                        <td>{course.p_one_s_sixteen}</td>
                        <td>{course.p_one_s_seventeen}</td>
                        <td>{course.p_one_s_eighteen}</td>
                    </tr>
                    <tr>
                        <td>{course.player_two}</td>
                        <td>{course.p_two_s_one}</td>
                        <td>{course.p_two_s_two}</td>
                        <td>{course.p_two_s_three}</td>
                        <td>{course.p_two_s_four}</td>
                        <td>{course.p_two_s_five}</td>
                        <td>{course.p_two_s_six}</td>
                        <td>{course.p_two_s_seven}</td>
                        <td>{course.p_two_s_eight}</td>
                        <td>{course.p_two_s_nine}</td>
                        <td>{course.p_two_s_ten}</td>
                        <td>{course.p_two_s_eleven}</td>
                        <td>{course.p_two_s_twelve}</td>
                        <td>{course.p_two_s_thirteen}</td>
                        <td>{course.p_two_s_fourteen}</td>
                        <td>{course.p_two_s_fifteen}</td>
                        <td>{course.p_two_s_sixteen}</td>
                        <td>{course.p_two_s_seventeen}</td>
                        <td>{course.p_two_s_eighteen}</td>
                        <tr>
                            <td>{course.player_three}</td>
                            <td>{course.p_three_s_one}</td>
                            <td>{course.p_three_s_two}</td>
                            <td>{course.p_three_s_three}</td>
                            <td>{course.p_three_s_four}</td>
                            <td>{course.p_three_s_five}</td>
                            <td>{course.p_three_s_six}</td>
                            <td>{course.p_three_s_seven}</td>
                            <td>{course.p_three_s_eight}</td>
                            <td>{course.p_three_s_nine}</td>
                            <td>{course.p_three_s_ten}</td>
                            <td>{course.p_three_s_eleven}</td>
                            <td>{course.p_three_s_twelve}</td>
                            <td>{course.p_three_s_thirteen}</td>
                            <td>{course.p_three_s_fourteen}</td>
                            <td>{course.p_three_s_fifteen}</td>
                            <td>{course.p_three_s_sixteen}</td>
                            <td>{course.p_three_s_seventeen}</td>
                            <td>{course.p_three_s_eighteen}</td>
                        </tr>
                </table>

            </div>
        </>
    );
};

Course.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            holes: PropTypes.number.isRequired,
            player_one: PropTypes.string.isRequired,
            player_two: PropTypes.string.isRequired,
            player_three: PropTypes.string.isRequired
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Course;